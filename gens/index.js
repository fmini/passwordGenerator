const lowers = require('./lowers');
const nums = require('./nums');
const specials = require('./specials');
const uppers = require('./uppers');

function randCombine(length) {
  // where length from generatePW length
  let generatedPW = '';
  for (i = 0; i < length; i++) {
    let type = Math.floor(Math.random * 3);
    if (type === 0) {
      lowers.randLower();
    } else if (type === 1) {
      nums.randNum();
    } else if (type === 2) {
      specials.randSpec();
    } else {
      uppers.randUpper();
    }
    generatedPW += char;
  }

  console.log(n + ' is ' + String.fromCharCode(n));
}
