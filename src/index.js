const combine = require('./gens/combine');
const validate = require('./gens/validate');

const charPoolGlobal = {
  lowers: true,
  uppers: false,
  specials: true,
  nums: true,
};

// main function that will call the randomizer

const generatePW = function (length, charPool) {
  const genFuncs = [];
  const types = [];
  for (const [key, value] of Object.entries(charPool)) {
    if (value) {
      genFunc = require(`./gens/${key}`);
      types.push(key);
      genFuncs.push(genFunc);
    }
  }
  let generatedPW = combine(length, genFuncs);

  while (!validate(generatedPW, types)) {
    console.log('failed');
    generatedPW = combine(length, genFuncs);
  }
  console.log(generatedPW);
};

generatePW(5, charPoolGlobal);

module.exports = { generatePW };
