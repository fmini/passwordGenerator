const combine = require('./gens/combine');

// main function that will call the randomizer

const generatePW = (length, lower, num, special, upper) => {
  redo = Array.from(arguments); // ===== saves original arguments provided to generatePW for eventual redo call if validation fails, however cannot get generatePW to run again because it is undefined
  types = []; // ===== not defined as let const or var
  if (lower) types.push('l');
  if (num) types.push('n');
  if (special) types.push('s');
  if (upper) types.push('u');
  combine(length, lower, num, special, upper);
};

generatePW(8, true, true, true, true);

module.exports.generatePW = generatePW;
