const regexes = {
  lowers: /[a-z]/,
  nums: /\d/,
  specials: /[!#$%&*+?@^|]/,
  uppers: /[A-Z]/,
};

const validate = (PW, types) => {
  const matches = types.map(type => {
    return regexes[type].test(PW);
  });

  if (!matches.every(match => match)) {
    return false;
  }

  return true;
};

module.exports = validate;

// [a-z]|\d|[A-Z]|[!#$%&*+?@^|]
