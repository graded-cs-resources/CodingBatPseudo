
const { args } = require("watchify");
const Collection = require("./collections.js");

/**
 * it converts nodingbat input (as stored) to js
 *     e.g. inputParser('(1,2)')=>[1,2]
 **/


module.exports = function inputParser(exercise, inputStr) {
  var argsWithoutParentheses = inputStr.slice(1, -1);
  argsWithoutParentheses = argsWithoutParentheses.replaceAll("TRUE", "true");
  argsWithoutParentheses = argsWithoutParentheses.replaceAll("FALSE", "false");
  let functionInput;

  if (exercise.inputType === "map") {
    if (argsWithoutParentheses === "[[]]") {
      return new Map();
    }
    else {
      let tempArrayOfArgs = JSON.parse(argsWithoutParentheses);
      functionInput = new Map();
      for (let item of tempArrayOfArgs) {
        functionInput.set(item[0], item[1]);
      }
    }
  } else if (exercise.inputType === "collection") {
    let arrayInputString = argsWithoutParentheses.replaceAll("{", "[").replaceAll("}", "]");
    let arrayInput = JSON.parse(arrayInputString);
    functionInput = [new Collection(arrayInput)];
  }
  else {
    try {
      let arrayOfArgs = '[' + argsWithoutParentheses + ']';
      eval("functionInput = " + arrayOfArgs);
    } catch (e) {
      functionInput = e.toString();
    }
  }
  return functionInput;
}