////// Solved hacker rank week 9 coin change problem with dp and memoization.....

function f(arr, index, target, dp) {
  //   console.log(index,target,dp)
  if (target === 0) return 1;
  if (index < 0) return target === 0 ? 1 : 0;
  if (dp[index][target] && dp[index][target] !== -1) return dp[index][target];

  let notPick = f(arr, index - 1, target, dp);
  let pick = 0;
  if (arr[index] <= target) pick = f(arr, index, target - arr[index], dp);

  return (dp[index][target] = pick + notPick);
}
function getWays(n, c) {
  let dp = Array.from({ length: c.length + 1 }, () => Array(n + 1).fill(-1));
  return f(c, c.length - 1, n, dp);
}
