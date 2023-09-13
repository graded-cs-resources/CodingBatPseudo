/** creates default input to start function **/
solutions = require("../solutions.js");

module.exports = function defaultInput(exercise) {
  let solution = exercise.solution || solutions[exercise.name];
  if (typeof (solution) === "string") {
    // we have a string solution, likely pseudocode
    var lines = solution.split("\n");
    return (lines[0].trim() + "\n \n \n \n" + lines[lines.length - 1].trim());
  }
  let solutionFullText = solution.toString();
  let openingBracket = solutionFullText.indexOf("{")
  return solutionFullText.substring(0, openingBracket) + "{\n \n \n}";
}