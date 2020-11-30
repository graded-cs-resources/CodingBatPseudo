const JSON5 = require("json5")
module.exports = class Stack {
  values = new Array();
  next = 0;

  push = function (el) {
    this.values.push(el);
  }
  pop = function (el) {
    this.values.pop(el);
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
