const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(' ');
    } 
    else if (value === null) {
      this.chain.push('null');
    } else {
      this.chain.push(value.toString());
    }
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error();
    } 
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let chained = this.chain.map((value) => `( ${value} )`);
    this.chain = [];
    return chained.join('~~');
  }
};

module.exports = chainMaker;
