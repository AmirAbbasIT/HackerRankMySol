function lonelyinteger(a) {
  let count = {};
  let lonely = null;
  a.forEach((i) => {
    if (count[i]) count[i] = count[i] + 1;
    else count[i] = 1;
  });

  for (let [name, value] of Object.entries(count)) {
    if (value === 1) {
      lonely = name;
      break;
    }
  }

  return lonely;
}
