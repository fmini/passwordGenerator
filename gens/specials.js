specials = [33, 35, 36, 37, 38, 42, 43, 45, 63, 64, 94, 124];

let randSpec = String.fromCharCode(
  specials[~~(Math.random() * specials.length)]
);
