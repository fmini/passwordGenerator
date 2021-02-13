// randomly select a charCode between 48 and 57 for 0 through 9
const randNum = () => {
  return ~~(Math.random() * 10) + 48;
};

module.exports = randNum;
