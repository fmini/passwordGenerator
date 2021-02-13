// randomly select a charCode between 65 and 90 for A through Z
const randUpper = () => {
  return ~~(Math.random() * 26) + 65;
};

module.exports = randUpper;
