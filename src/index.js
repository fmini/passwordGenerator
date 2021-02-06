const combine = require('./gens/combine');

// main function that will call the randomizer

function generatePW(length, lower, num, special, upper) {
  types = [];
  if (lower) types.push('l');
  if (num) types.push('n');
  if (special) types.push('s');
  if (upper) types.push('u');
  combine(length, lower, num, special, upper);
}

generatePW(4, true, true, true, true);

module.exports.generatePW = generatePW;
