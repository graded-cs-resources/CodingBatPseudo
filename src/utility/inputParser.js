
//const { args } = require("watchify");
const Collection = require("./collections.js");
const Stack = require("./stacks.js")
const Queue = require("./queues.js")

/**
 * it converts nodingbat input (as stored) to js
 *     e.g. inputParser('(1,2)')=>[1,2]
 **/


module.exports = function inputParser(exercise, inputStr) {
  /**
   * @type String
   */
  var argsWithoutParentheses = inputStr.slice(1, -1);
  argsWithoutParentheses = argsWithoutParentheses.replaceAll("TRUE", "true");
  argsWithoutParentheses = argsWithoutParentheses.replaceAll("FALSE", "false");
  let functionInput;

 if (exercise.inputType === "collection") {
    //collections are in the form {1, 2, 3}
    let arrayInputString = argsWithoutParentheses.replaceAll("{", "[").replaceAll("}", "]");
    let arrayInput = JSON.parse(arrayInputString);
    functionInput = [new Collection(arrayInput)];
  } else if (exercise.inputType === "stack") {
    //stacks take the form "B[1,2,3]T" with Bottom and Top
    let arrayInputString = argsWithoutParentheses
      .substring(argsWithoutParentheses.indexOf("["),
        argsWithoutParentheses.indexOf("]") + 1);
    let arrayInput = JSON.parse(arrayInputString);
    functionInput = [new Stack(arrayInput)]
  } else if (exercise.inputType === "queue") {
    //queues take the form "F[1,2,3]B" for front and back
    let arrayInputString = argsWithoutParentheses
      .substring(argsWithoutParentheses.indexOf("["),
        argsWithoutParentheses.indexOf("]") + 1);
    let arrayInput = JSON.parse(arrayInputString);
    functionInput = [new Queue(arrayInput)]
  }
  else {
    try {
      let arrayOfArgs = '[' + argsWithoutParentheses + ']';
      functionInput = JSON.parse(arrayOfArgs);
    } catch (e) {
      functionInput = e.toString();
    }
  }
  return functionInput;
}