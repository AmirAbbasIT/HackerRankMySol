function equalStacks(h1, h2, h3) {
  let s1 = h1.reduce((p, c) => p + c, 0);
  let s2 = h2.reduce((p, c) => p + c, 0);
  let s3 = h3.reduce((p, c) => p + c, 0);

  while (h1.length && h2.length && h3.length) {
    if (s1 == s2 && s1 == s3) {
      return s1;
    } else if (s1 >= s2 && s1 >= s3) {
      s1 -= h1.shift();
    } else if (s2 >= s1 && s2 >= s3) {
      s2 -= h2.shift();
    } else if (s3 >= s2 && s3 >= s1) {
      s3 -= h3.shift();
    }
  }
  return 0;
}
