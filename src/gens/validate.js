const PW = require('./combine');
const types = require('../index');
const lowerReg = /[a-z]/;
const numReg = /\d/;
const specReg = /[!#$%&*+?@^|]/; // shows true with numbers...
const upperReg = /[A-Z]/;

console.log(types);

const validate = (PW, types) => {
  //console.log(types, typeof types);
  if (types.includes('l')) {
    if (!lowerReg.test(PW)) console.log('No lowers');
  }
  if (types.includes('n')) {
    if (!numReg.test(PW)) console.log('No numbers');
  }
  if (types.includes('s')) {
    if (!specReg.test(PW)) console.log('No specials');
  }
  if (types.includes('u')) {
    if (!upperReg.test(PW)) console.log('No uppers');
  }
};
console.log(PW);

module.exports = validate;

// [a-z]|\d|[A-Z]|[!#$%&*+?@^|]
