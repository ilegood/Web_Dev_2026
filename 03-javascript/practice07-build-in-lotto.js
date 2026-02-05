while (true) {
  let lotto1 = Math.floor(Math.random() * 45 + 1);
  let lotto2 = Math.floor(Math.random() * 45 + 1);
  let lotto3 = Math.floor(Math.random() * 45 + 1);
  let lotto4 = Math.floor(Math.random() * 45 + 1);
  let lotto5 = Math.floor(Math.random() * 45 + 1);
  let bonus = Math.floor(Math.random() * 45 + 1);
  if (
    lotto1 !== lotto2 &&
    lotto1 !== lotto3 &&
    lotto1 !== lotto4 &&
    lotto1 !== lotto5
  ) {
    console.log(lotto1, lotto2, lotto3, lotto4, lotto5, bonus);
    break;
  }
}
