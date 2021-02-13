// character codes of allowed special characters
specials = [33, 35, 36, 37, 38, 42, 43, 63, 64, 94, 124];

// randomly select a charCode from specials array
const randSpec = () => {
  return specials[~~(Math.random() * specials.length)];
};

module.exports = randSpec;
