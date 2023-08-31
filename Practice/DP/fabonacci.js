////Memoization Technique......
function fb(n, map) {
  if (map?.[n]) {
    return map[n];
  }
  if (n <= 1) {
    return n;
  }
  return (map[n] = fb(n - 1, map) + fb(n - 2, map));
}
console.log(fb(6, {}));

///////////////
// DP Technique..........
///Steps///
//// write the base case -> convert the function calls in remaining loop -> boom
function fb(n, map) {
  map[0] = 0;
  map[1] = 1;
  for (let i = 2; i <= n; i++) {
    map[i] = map[i - 1] + map[i - 2];
  }
  return map[n];
}
