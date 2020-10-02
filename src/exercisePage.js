/* eslint-disable no-use-before-define */
/* eslint-disable no-eval */
/* eslint-disable no-undef */
/* eslint-disable quotes */
const $ = require("jquery");
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

exerciseListeners(editor, exerciseName);
keyboardShortcuts(editor, exerciseName);

// display exercise page
$('#title').text(exercise.title);
$('#name').text(exercise.name);
$('#problem').html(exercise.question);

setInitialEditorContents(editor, exerciseName, exercise);
displayExampleRuns(exercise, exerciseName);

// show solution button if already solved
// if (localStorage.getItem(exerciseName) === "true") {
//   $('#show').css('visibility','visible');
// }

$('#defaults').on('click', () => {
  editor.setValue(`${defaultInput(exerciseName)}`);
});
$('#solve').on('click', () => {
  $('tr').remove();
  $('#tests').append(tableHeader());
  const answer = editor.getValue();

  // whenever the user checks their solution,
  // save the most recent version of their code to localStorage
  const exerciseCode = `${exerciseName} - code`;
  localStorage.setItem(exerciseCode, answer);

  try {
    $(".congrats").text("");
    $(".errorMessage").text("");
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
        if (typeof (solutions[exerciseName]) === "string") {
          //we have a pseudocode solution!
          [idealResult, idealOut] = runPS(solutions[exerciseName], input);
        } else {
          idealOut = "";
          idealResult = solutions[exerciseName](...input);
        }
        [result, output] = runPS(answer, input);
        const formattedMapIdealResult = prettyPrintMap(idealResult);
        const formattedMapUserResult = prettyPrintMap(result);

        $('#tests').append(formatResults(exerciseName, formattedInput, formattedMapIdealResult, formattedMapUserResult, idealOut, output));
      } else {
        if (typeof (solutions[exerciseName]) === "string") {
          //we have a pseudocode solution!
          [idealResult, idealOut] = runPS(solutions[exerciseName], inputCopy);
        } else {
          idealOut = "";
          idealResult = solutions[exerciseName](...inputCopy);
        }
        [result, output] = runPS(answer, inputCopy);

        $('#tests').append(formatResults(exerciseName, inputStr, idealResult, result, idealOut, output));
      }

      if (idealOut === "") {
        results.push(_.isEqual(result, idealResult));
      } else {
        results.push(_.isEqual(output, idealOut));
      }
    });

    if (results.every(isTrue)) {
      $('.congrats').text("100% Passing. Well Done!");
      //localStorage[exerciseName] = "true";
    }
  } catch (theError) {
    $('.congrats').text("");
    $('th').remove();
    $('.errorMessage').text(theError);
    console.log(theError.stack);
  }
});

$('#showSolution').on('click', () => {
  if ($('#showSolution').html() === "Show Solution") {
    const s = solutions[exerciseName].toString();
    const r = new RegExp(/function/);
    // eslint-disable-next-line no-unused-vars
    const n = s.replace(r, `function ${exercise.name}`);
    editor.getWrapperElement().style.display = "none";

    solutionArea.setValue(s);
    solutionArea.getWrapperElement().style.display = "block";
    solutionArea.setSize("100%", "auto");
    $('#showSolution').html("Hide Solution");
  } else {
    $('#showSolution').html("Show Solution");
    editor.getWrapperElement().style.display = "block";
    solutionArea.getWrapperElement().style.display = "none";
  }
});

function isTrue(someValue) {
  return someValue === true;
}
