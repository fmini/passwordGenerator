const combine = require('./combine');
const index = require('../index');
const lowerReg = /[a-z]/;
const numReg = /\d/;
const specReg = /[!#$%&*+?@^|]/; // shows true with numbers...
const upperReg = /[A-Z]/;

const validate = (PW, types, redo) => {
  var failed = ''; // ===== will not allow failed out of if statements as let
  if (types.includes('l')) {
    if (!lowerReg.test(PW)) {
      failed = 'No lowers';
    }
  }
  if (types.includes('n')) {
    if (!numReg.test(PW)) {
      failed = 'No numbers';
    }
  }
  if (types.includes('s')) {
    if (!specReg.test(PW)) {
      failed = 'No specials';
    }
  }
  if (types.includes('u')) {
    if (!upperReg.test(PW)) {
      failed = 'No uppers';
    }
  }
  console.log(failed); // ==== need to rerun generatePW here
};

module.exports = validate;

// [a-z]|\d|[A-Z]|[!#$%&*+?@^|]
