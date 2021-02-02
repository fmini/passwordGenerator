// randomly select a charCode between 48 and 57 for 0 through 9

for (i = 0; i < 100; i++) {
  let randNum = Math.floor(Math.random() * 10) + 48;
  console.log(randNum);
}
