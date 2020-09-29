/** creates default input to start function **/
solutions = require("../solutions.js");

module.exports = function defaultInput(exerciseName) {
  if (typeof (solutions[exerciseName]) === "string") {
    // we have a string solution, likely pseudocode
    var lines = solutions[exerciseName].split("\n");
    return (lines[0].trim() + "\n \n \n \n" + lines[lines.length - 1].trim());
  }
  let solutionFullText = solutions[exerciseName].toString();
  let openingBracket = solutionFullText.indexOf("{")
  return solutionFullText.substring(0, openingBracket) + "{\n \n \n}";
}