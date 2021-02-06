const lowers = require('./lowers');
const nums = require('./nums');
const specials = require('./specials');
const uppers = require('./uppers');
const validate = require('./validate');

//randomly combine each of the character types
const randCombine = (length, lower, num, special, upper) => {
  let generatedPW = '';
  let char = '';
  for (i = 0; i < length; i++) {
    //randomly choose a character type to generate
    let type = ~~(Math.random() * 4);
    if (type === 0 && lower) {
      char = String.fromCharCode(lowers.randLower());
    } else if (type === 1 && num) {
      char = String.fromCharCode(nums.randNum());
    } else if (type === 2 && special) {
      char = String.fromCharCode(specials.randSpec());
    } else if (type === 3 && upper) {
      char = String.fromCharCode(uppers.randUpper());
    } else;
    generatedPW += char;
  }

  validate(generatedPW, types, redo);
  //show the output for testing
  console.log(generatedPW);
  console.log(generatedPW.length);
};

module.exports = randCombine;
