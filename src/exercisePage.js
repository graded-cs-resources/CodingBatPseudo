const _ = require("lodash");
const CodeMirror = require("codemirror-minified");
const runPS = require("./utility/convertPStoJS");
const exercises = require("./allExercisesIncludingHidden.js");
const solutions = require("./solutions.js");
const defaultInput = require("./utility/defaultInput.js");
const deParam = require("./utility/deParam.js");
const inputParser = require("./utility/inputParser.js");
const tableHeader = require("./utility/tableHeader.js");
const formatResults = require("./utility/formatResults.js");
const setInitialEditorContents = require("./utility/setInitialEditorContents.js");
const displayExampleRuns = require("./utility/displayExampleRuns.js");
const prettyPrintMap = require("./utility/prettyPrintMap.js");
const exerciseListeners = require("./listeners/exerciseListeners");
const keyboardShortcuts = require("./listeners/keyboardShortcuts");

require("../node_modules/codemirror-minified/addon/edit/matchbrackets.js");
const CodeMirrorPSHighlighting = require("./utility/cmps.js");
CodeMirrorPSHighlighting(CodeMirror);
// define codemirror editor to interact with code on page
const editor = CodeMirror.fromTextArea(document.getElementById("answer"), {
  lineNumbers: true,
  matchBrackets: true,
  mode: "pseudocode",
  viewportMargin: Infinity,
  lineWrapping: true,
  extraKeys: {
    "Cmd-/": "toggleComment",
    "Ctrl-/": "toggleComment",
    Tab: cm => cm.execCommand("indentMore"),
    "Shift-Tab": cm => cm.execCommand("indentLess"),
  },
});
editor.getWrapperElement().style.height = "auto";
editor.setSize("100%", "auto");

const solutionArea = CodeMirror.fromTextArea(document.getElementById("solution"), {
  readOnly: true,
  noCursor: true,
  mode: "pseudocode",
  viewportMargin: Infinity,
  lineWrapping: true,
  lineNumbers: true,
  cursorBlinkRate: -1,
});
solutionArea.getWrapperElement().style.display = "none";
solutionArea.getWrapperElement().style.background = "#dadada";


// Work out which excercise to show
const urlParams = deParam(window.location.search);
const exerciseName = urlParams.name || exercises[0].name;
/** here we match the exerciseName (from querystring) to the problem in exercise obj**/
const exercise = exercises.filter(ex => ex.name === exerciseName)[0];
let solution = exercise.solution || solutions[exerciseName];

exerciseListeners(editor, exerciseName);
keyboardShortcuts(editor, exerciseName);

// display exercise page
document.getElementById('title').innerText = exercise.title;
document.getElementById('name').innerText = exercise.name;
document.getElementById('problem').innerHTML = exercise.question;

setInitialEditorContents(editor, exerciseName, exercise);
displayExampleRuns(exercise, exerciseName);


document.getElementById("defaults").addEventListener('click', () => {
  editor.setValue(`${defaultInput(exercise)}`);
});

document.getElementById("solve").addEventListener('click', () => {
  document.querySelectorAll('tr').forEach((e) => e.remove());
  document.getElementById("tests").append(tableHeader());
  const answer = editor.getValue();

  // whenever the user checks their solution,
  // save the most recent version of their code to localStorage
  const exerciseCode = `${exerciseName} - code`;
  localStorage.setItem(exerciseName, "attempted");
  localStorage.setItem(exerciseCode, answer);


  try {
    document.querySelectorAll(".congrats").forEach((e) => e.innerText = "");
    document.querySelectorAll(".errorMessage").forEach((e) => e.innerText = "");
    const inputs = exercise.inputs;

    const results = [];
    inputs.forEach((inputStr) => {
      const input = inputParser(exercise, inputStr);
      let result;
      let idealResult;

      // if the input is an array/object, make a copy to avoid user changing the passed version...
      const inputCopy = inputParser(exercise, inputStr);

      if (exercise.inputType === "map") {
        const formattedInput = prettyPrintMap(input, "parentheses");
        if (typeof (solution) === "string") {
          //we have a pseudocode solution!
          [idealResult, idealOut] = runPS(solution, input, exercise.preamble);
        } else {
          idealOut = "";
          idealResult = solution(...input);
        }
        [result, output] = runPS(answer, input);
        const formattedMapIdealResult = prettyPrintMap(idealResult);
        const formattedMapUserResult = prettyPrintMap(result);

        document.getElementById("tests").append(formatResults(exerciseName, formattedInput, formattedMapIdealResult, formattedMapUserResult, idealOut, output));
      } else {
        if (typeof (solution) === "string") {
          //we have a pseudocode solution!
          [idealResult, idealOut] = runPS(solution, inputCopy, exercise.preamble);
        } else {
          idealOut = "";
          idealResult = solution(...inputCopy);
        }
        [result, output] = runPS(answer, inputCopy, exercise.preamble);

        document.getElementById("tests").append(formatResults(exerciseName, inputStr, idealResult, result, idealOut, output));
      }

      if (idealOut === "") {
        results.push(_.isEqual(result, idealResult));
      } else {
        results.push(_.isEqual(output, idealOut));
      }
    });

    if (results.every(isTrue)) {
      document.querySelectorAll(".congrats").forEach((e) => e.innerText = "100% Passing. Well Done!");
      localStorage.setItem(exerciseName, "solved");
    }
  } catch (theError) {
    document.querySelectorAll(".congrats").forEach((e) => e.innerText = "");
    document.querySelectorAll('th').forEach((e) => e.remove());
    document.querySelectorAll(".errorMessage").forEach((e) => e.innerText = theError);
    console.log(theError.stack);
  }
});

document.getElementById("showSolution").addEventListener('click', () => {
  if (document.getElementById("showSolution").innerText === "Show Solution") {
    const s = solution.toString();
    const r = new RegExp(/function/);
    // eslint-disable-next-line no-unused-vars
    const n = s.replace(r, `function ${exercise.name}`);
    editor.getWrapperElement().style.display = "none";

    solutionArea.setValue(s);
    solutionArea.getWrapperElement().style.display = "block";
    solutionArea.setSize("100%", "auto");
    document.getElementById("showSolution").innerText = "Hide Solution";
  } else {
    document.getElementById("showSolution").innerText = "Show Solution";
    editor.getWrapperElement().style.display = "block";
    solutionArea.getWrapperElement().style.display = "none";
  }
});

function isTrue(someValue) {
  return someValue === true;
}
