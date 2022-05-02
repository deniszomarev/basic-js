const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value ? this.chain.push(value) : this.chain.push("");
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position >= 1 &&
      position <= this.chain.length &&
      position % 1 === 0
    ) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    throw new NotImplementedError("Not implemented");
  },
};

module.exports = {
  chainMaker,
};
