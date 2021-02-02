// randomly select a charCode between 65 and 90 for A through Z

for (i = 0; i < 100; i++) {
  let randUpper = Math.floor(Math.random() * 26) + 65;
  console.log(randUpper);
}
