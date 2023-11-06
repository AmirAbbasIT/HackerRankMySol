function alternate(s) {
  const chars = [...s];
  let set = [...new Set(s)];
  // convert into set so we get all unique chars.
  let max = 0;
  for (let i = 0; i < set.length - 1; i++) {
    for (let j = i + 1; j < set.length; j++) {
      let a = set[i];
      let b = set[j];
      // get every possible 2 characters and filter string consist of only those characters.
      let f = chars.filter((c) => c == a || c == b);
      let flag = true;
      // check string constst of only alternate or not
      for (let k = 0; k < f.length - 2; k++) {
        if (f[k] != f[k + 2]) {
          flag = false;
        }
      }
      // if they are only consist of alternate check if their length is more than prev max
      if (flag) {
        if (f.length > max) {
          max = f.length;
        }
      }
    }
  }
  // return the max alternative string...
  return max;
}
