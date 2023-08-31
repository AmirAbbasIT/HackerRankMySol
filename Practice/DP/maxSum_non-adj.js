//// Find maximum sum of non adjacent elements...
//// without memoization....
function f(arr, n) {
  console.log(arr, n);
  if (n === 0) return arr[n];
  if (n < 0) return 0;

  let pick = arr[n] + f(arr, n - 2);
  let notPick = f(arr, n - 1);
  return Math.max(pick, notPick);
}

console.log(f([1, 2, 3, 4, 5], 4));

//////
/// Memoized solution...
function f(arr, n, map) {
  if (map[n]) return map[n];
  if (n === 0) return arr[n];
  if (n < 0) return 0;
  let pick = arr[n] + f(arr, n - 2, map);
  let notPick = f(arr, n - 1, map);
  return (map[n] = Math.max(pick, notPick));
}

console.log(f([1, 2, 3, 4, 5], 4, {}));
///////
/// Tabulation...
function f(arr, n, map) {
  map[0] = arr[0];
  for (let i = 1; i <= n; i++) {
    pick = arr[i] + (map[i - 2] || 0);
    let notPick = map[i - 1];
    map[i] = Math.max(pick, notPick);
  }
  return map[n];
}

console.log(f([1, 2, 3, 4, 5], 4, {}));
