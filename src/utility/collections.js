module.exports = class Collection {

  elements = [];
  index = 0;

  /**
   * Creates an IB style collection from the elements in an array
   * @param {Array} [arr=[]] - Array with starting values, defaults to empty
   */
  constructor(arr) {
    if (Array.isArray(arr)) {
      this.elements = arr;
    }
  }

  addItem(a) {
    this.elements.push(a);
  }

  resetNext() {
    this.index = 0;
  }

  hasNext() {
    return (this.index < this.elements.length)
  }

  getNext() {
    this.index++;
    return this.elements[this.index - 1];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  toString() {
    var str = this.elements.toString();
    if (typeof this.elements[0] === "string") {
      str = str.replaceAll(/[a-zA-Z0-9 ]+/g, "\"$1\"");
    }
    str = str.replaceAll(",", ", ")
    return "{" + str + "}";
  }
}