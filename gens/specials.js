specials = [33, 35, 36, 37, 38, 42, 43, 45, 63, 64, 94, 124];
// randomly select a charCode from specials array for special characters

for (i = 0; i < 100; i++) {
  let randSpec = specials[~~(Math.random() * specials.length)];
  console.log(randSpec);
}
