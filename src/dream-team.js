const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let teamName = [];
  for (let member of members) {
    if (typeof(member) == 'string') {
      teamName.push(member.trim()[0].toUpperCase());
    }
  }

  return teamName.sort().join('');
};