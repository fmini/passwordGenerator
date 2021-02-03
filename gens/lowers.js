// randomly select a charCode between 97 and 122 for a through z
const randLower = () => {
  return ~~(Math.random() * 26) + 97;
};

module.exports.randLower = randLower;
