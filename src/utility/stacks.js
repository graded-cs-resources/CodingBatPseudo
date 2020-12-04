const JSON5 = require("json5")
module.exports = class Stack {
  values = new Array();
  next = 0;

  constructor(arr) {
    if (arr && Array.isArray(arr))
      this.values = arr;
  }

  push = function (el) {
    this.values.push(el);
  }
  pop = function () {
    return this.values.pop();
  }
  isEmpty = function () {
    if (this.values.length) {
      return (this.values.length < 1)
    }
    else { return true }
  }

  toString = function () {
    var out = "B" + JSON5.stringify(this.values).replaceAll(",", ", ") + "T";
    return out;
  }

}
