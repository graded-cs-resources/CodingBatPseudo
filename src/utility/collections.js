module.exports = class Collection {

  elements = [];
  index = 0;

  /**
   * Creates an IB style collection from the elements in an array
   * @param {Array} arr 
   */
  constructor(arr) {
    try {
      var first = arr[0];
      this.elements = arr;
    } catch (e) {
      error("did not pass an array to collection constructor")
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
}