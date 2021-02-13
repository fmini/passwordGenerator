//randomly combine each of the character types
const randCombine = (length, genFuncs) => {
  let generatedPW = '';
  for (i = 0; i < length; i++) {
    //randomly choose a character type to generate
    let type = ~~(Math.random() * genFuncs.length);
    generatedPW += String.fromCharCode(genFuncs[type]());
  }
  return generatedPW;
};

module.exports = randCombine;
