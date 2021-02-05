const lowers = require('./lowers');
const nums = require('./nums');
const specials = require('./specials');
const uppers = require('./uppers');

/*
 ******* need to work on regex test for requirement compliance and a function for only selecting wanted types of characters
 */
//randomly combine each of the character types
function randCombine(length) {
  //where length is from generatePW length
  let generatedPW = '';
  let char = '';
  for (i = 0; i < length; i++) {
    //randomly choose a character type to generate
    let type = ~~(Math.random() * 4);
    if (type === 0) {
      char = String.fromCharCode(lowers.randLower());
    } else if (type === 1) {
      char = String.fromCharCode(nums.randNum());
    } else if (type === 2) {
      char = String.fromCharCode(specials.randSpec());
    } else {
      char = String.fromCharCode(uppers.randUpper());
    }
    generatedPW += char;
  }
  //show the output for testing
  console.log(generatedPW);
}

//hard coded length and call for testing
randCombine(8);
