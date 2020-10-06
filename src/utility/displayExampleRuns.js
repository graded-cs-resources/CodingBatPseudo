
let inputParser = require("./inputParser.js");
let solutions = require("../solutions.js");
let runPS = require("./convertPStoJS.js");
let prettyPrintMap = require("./prettyPrintMap.js");

module.exports = function (exercise, exerciseName) {
    // example/sample runs
    for (let i = 0; i <= 2; i++) {
        try {
            let input = inputParser(exercise, exercise.inputs[i]);
            let result;
            if (exercise.inputType === "map") {
                // display syntax message
                if (i === 0) {
                    document.querySelector(".examples")
                    insertAdjacentHTML('beforeend',
                        `<p><em>Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.</em></p>`);
                }

                let inputCopy = inputParser(exercise, exercise.inputs[i]);
                let formattedInput = prettyPrintMap(inputCopy, "parentheses");
                if (typeof (solutions[exerciseName]) === "string") {
                    [result, out] = runPS(solutions[exerciseName], inputCopy);
                    if (!result) result = out;
                } else {
                    result = solutions[exerciseName](inputCopy);
                }
                let formattedResult = prettyPrintMap(result);
                document.querySelector('.examples')
                    .insertAdjacentHTML('beforeend',
                        `<li>${exerciseName}${formattedInput} → ${formattedResult}</li>`);
            }
            else {
                if (typeof (solutions[exerciseName]) === "string") {
                    [result, out] = runPS(solutions[exerciseName], input);
                    if (!result) result = out;
                } else {
                    result = solutions[exerciseName](...input);
                }
                document.querySelector('.examples')
                    .insertAdjacentHTML('beforeend',
                        `<li>${exerciseName}${exercise.inputs[i]} → ${result}</li>`);
            }
        } catch (e) {
            console.log(e);
            break;
        }
    }
}