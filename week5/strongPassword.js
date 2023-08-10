function minimumNumber(n, password) {
  let count = 4;
  const flags = {
    small: false,
    capital: false,
    special: false,
    number: false,
  };
  password.split("").forEach((c) => {
    let code = c.charCodeAt(0);
    if (!flags.number && code >= 48 && code <= 58) {
      flags.number = true;
      count--;
    }
    if (!flags.capital && code >= 65 && code <= 90) {
      flags.capital = true;
      count--;
    }
    if (!flags.small && code >= 97 && code <= 122) {
      flags.small = true;
      count--;
    }
    if (!flags.special && code >= 33 && code <= 45) {
      flags.special = true;
      count--;
    }
  });
  if (password.length + count >= 6) {
    return count;
  } else {
    return Math.abs(6 - password.length);
  }
}
