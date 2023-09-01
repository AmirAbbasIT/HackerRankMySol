///// Count Subset sum to k ... count number of subset/subsequence in which sum is == k.
let array = [1, 2, 3, 4];
let target = 4;
function f(arr, index, target) {
  if (target === 0) return 1;
  if (index === 0) return target - arr[0] === 0 ? 1 : 0;

  let notPick = f(arr, index - 1, target);
  let pick = f(arr, index - 1, target - arr[index]);

  return pick + notPick;
}

console.log(f(array, array.length - 1, target));

//// Memoization.....

// let array = [1, 2, 3, 4];
// let target = 4;
let dp = Array.from({ length: array.length }, () =>
  Array(target + 1).fill(false)
);
function f(arr, index, target) {
  if (target === 0) return 1;
  if (index === 0) return target - arr[0] === 0 ? 1 : 0;
  if (dp[index][target]) return dp[index][target];
  let notPick = f(arr, index - 1, target);
  let pick = 0;
  if (arr[index] <= target) pick = f(arr, index - 1, target - arr[index]);

  return (dp[index][target] = pick + notPick);
}

console.log(f(array, array.length - 1, target));

///// Tabulation
