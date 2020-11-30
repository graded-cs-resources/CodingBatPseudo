const JSON5 = require("json5");

module.exports = class Queue {
  values = new Array();
  next = 0;

  isEmpty = function () {
    if (this.values.length) {
      return (this.values.length < 1)
    }
    else { return true }
  }

  enqueue = function (value) {
    var size = this.values.length
    this.values[size] = value;
  }

  dequeue = function () {
    var result = null
    if (this.values.length > 0) {
      result = values[0]
      this.values.splice(0, 1)
    }
    return result
  }

  toString = function () {
    return "Fr" + JSON5.stringify(this.values).replaceAll(",", ", ") + "Bk";
  }
}