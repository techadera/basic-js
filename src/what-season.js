const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch (e) {
    throw new Error(e);
  }

  let month = date.getMonth();
  let season = '';
  if (month == 0 || month == 1 || month == 11) {
    season = 'winter';
  }
  else if (month >= 2 && month <= 4) {
    season = 'spring';
  }
  else if (month >= 5 && month <= 7) {
    season = 'summer';
  }
  else if (month >= 8 && month <= 10) {
    season = 'fall';
  }
  
  return season;
}
