const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix == undefined || matrix.length == 0) {
    return 0;
  }

  let catsAmount = 0;
  for (let subMatrix of matrix) {
    for (let item of subMatrix) {
      if (item == "^^") {
        catsAmount++;
      }
    }
  }

  return catsAmount;
};
