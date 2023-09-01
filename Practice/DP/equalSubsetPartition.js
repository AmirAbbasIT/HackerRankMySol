/////////Tabulation solution .... preRequists is Subset Sum problem ,,,, with new logic just

let array = [1, 2, 3, 4, 5, 6, 7];
let totalSum = array.reduce((a, b) => a + b, 0);
let target = totalSum / 2;
//if totalSum%2==1 return false; else check a subset have target or not.....
let dp = Array.from({ length: array.length }, () =>
  Array(target + 1).fill(false)
);
function f(arr, index, target, dp) {
  for (let i = 0; i < index; i++) {
    dp[i][0] = true;
  }
  dp[0][arr[0]] = true;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j <= target; j++) {
      let notpick = dp[i - 1][j];
      let pick = false;
      if (target > arr[i]) {
        pick = dp[i - 1][j - arr[i]];
      }
      dp[i][j] = pick || notpick;
    }
  }

  return dp[index][target];
}
