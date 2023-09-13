
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

            if (typeof (solution) === "string") {
                [result, out] = runPS(solution, input, exercise.preamble);
                if (!result) result = out;
            } else {
                result = solution(...input);
            }
            document.querySelector('.examples')
                .insertAdjacentHTML('beforeend',
                    `<li>${exercise.name}${exercise.inputs[i]} → ${result}</li>`);

        } catch (e) {
            console.log(e);
            break;
        }
    }
}