const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains
    .map((el) => el.split("."))
    .forEach((element) => {
      let domain = "";
      for (i = element.length - 1; i >= 0; i--) {
        domain += "." + element[i];
        if (result[domain]) {
          result[domain]++;
        } else {
          result[domain] = 1;
        }
      }
    });
  return result;
}

module.exports = {
  getDNSStats,
};
