
let inputParser = require("./inputParser.js");
let solutions = require("../solutions.js");
let runPS = require("./convertPStoJS.js");
let prettyPrintMap = require("./prettyPrintMap.js");

module.exports = function (exercise) {
    // example/sample runs
    let solution = exercise.solution || solutions[exercise.name];
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
                if (typeof (solution) === "string") {
                    [result, out] = runPS(solution, inputCopy);
                    if (!result) result = out;
                } else {
                    result = solution(inputCopy);
                }
                let formattedResult = prettyPrintMap(result);
                document.querySelector('.examples')
                    .insertAdjacentHTML('beforeend',
                        `<li>${exerciseName}${formattedInput} → ${formattedResult}</li>`);
            }
            else {
                if (typeof (solution) === "string") {
                    [result, out] = runPS(solution, input);
                    if (!result) result = out;
                } else {
                    result = solution(...input);
                }
                document.querySelector('.examples')
                    .insertAdjacentHTML('beforeend',
                        `<li>${exercise.name}${exercise.inputs[i]} → ${result}</li>`);
            }
        } catch (e) {
            console.log(e);
            break;
        }
    }
}