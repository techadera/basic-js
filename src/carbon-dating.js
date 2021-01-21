const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!Number.isNaN(sampleActivity)) {
    return false;
  }

  return Math.floor(Math.log(MODERN_ACTIVITY / HALF_LIFE_PERIOD) / sampleActivity);
};

