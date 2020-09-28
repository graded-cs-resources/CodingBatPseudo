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