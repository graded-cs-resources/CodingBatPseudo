const JSON5 = require("json5");

module.exports = class Queue {
  values = new Array();
  next = 0;

  constructor(arr) {
    if (arr && Array.isArray(arr))
      this.values = arr;
  }

  isEmpty = function () {
    if (this.values.length) {
      return (this.values.length < 1)
    }
    else { return true }
  }

  enqueue = function (value) {
    this.values.push(value);
  }

  dequeue = function () {
    return this.values.shift();
  }

  toString = function () {
    return "Fr" + JSON5.stringify(this.values).replaceAll(",", ", ") + "Bk";
  }
}