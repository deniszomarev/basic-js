const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect;
  }
  encrypt(message, keyword) {
    if (!message || !keyword) {
      throw Error("Incorrect arguments!");
    }
    const messageCharCodeArr = message
      .toUpperCase()
      .split("")
      .map((letter) => letter.charCodeAt(0));
    let keywordCharCodeArr = keyword
      .toUpperCase()
      .split("")
      .map((letter) => letter.charCodeAt(0));
    while (keywordCharCodeArr.length < message.length) {
      keywordCharCodeArr = keywordCharCodeArr.concat(keywordCharCodeArr);
    }
    const result = [];
    let tempIndex = 0;
    messageCharCodeArr.forEach((letterCharCode) => {
      if (letterCharCode < 65 || letterCharCode > 90) {
        result.push(letterCharCode);
      } else {
        let tempCode = letterCharCode + (keywordCharCodeArr[tempIndex] - 65);
        tempIndex++;
        if (tempCode > 90) {
          tempCode = tempCode - 26;
          result.push(tempCode);
        } else {
          result.push(tempCode);
        }
      }
    });
    if (this.isDirect == true || this.isDirect == undefined) {
      return String.fromCharCode(...result);
    }
    if (this.isDirect == false) {
      return String.fromCharCode(...result.reverse());
    }
  }
  decrypt(message, keyword) {
    if (!message || !keyword) {
      throw Error("Incorrect arguments!");
    }
    const messageCharCodeArr = message
      .toUpperCase()
      .split("")
      .map((letter) => letter.charCodeAt(0));
    let keywordCharCodeArr = keyword
      .toUpperCase()
      .split("")
      .map((letter) => letter.charCodeAt(0));
    while (keywordCharCodeArr.length < message.length) {
      keywordCharCodeArr = keywordCharCodeArr.concat(keywordCharCodeArr);
    }
    const result = [];
    let tempIndex = 0;
    messageCharCodeArr.forEach((letterCharCode) => {
      if (letterCharCode < 65 || letterCharCode > 90) {
        result.push(letterCharCode);
      } else {
        let tempCode = letterCharCode - (keywordCharCodeArr[tempIndex] - 65);
        tempIndex++;
        if (tempCode < 65) {
          tempCode = tempCode + 26;
          result.push(tempCode);
        } else {
          result.push(tempCode);
        }
      }
    });
    if (this.isDirect == true || this.isDirect == undefined) {
      return String.fromCharCode(...result);
    }
    if (this.isDirect == false) {
      return String.fromCharCode(...result.reverse());
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
