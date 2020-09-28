/** creates default input to start function **/
solutions = require("../solutions.js");
sigs = require("../sigs.js");
module.exports = function defaultInput(exerciseName){
  if (sigs[exerciseName]) return sigs[exerciseName];
  let solutionFullText = solutions[exerciseName].toString();
  let openingBracket = solutionFullText.indexOf("{")
  return solutionFullText.substring(0,openingBracket);
  }