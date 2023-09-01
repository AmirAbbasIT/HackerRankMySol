///////////// Subset Sum equal to k .. i.e code Studio problem...
///// true or false when find first subset..
let array = [1, 2, 3, 4];
let target = 5;
function f(arr, index, target) {
  if (target === 0) return true;
  if (index === 0) return target - arr[0] === 0;

  let notPick = f(arr, index - 1, target);
  let pick = f(arr, index - 1, target - arr[index]);

  return pick || notPick;
}

console.log(f(array, array.length - 1, target));

////////////
/// Memoization...
// let array=[1,2,3,4];
// let target=5;
let dp = Array.from({ length: array.length }, () => Array(target + 1).fill(-1));
function f(arr, index, target, dp) {
  if (target === 0) return true;
  if (index === 0) return target - arr[0] === 0;
  if (dp[index][target] !== -1) return dp[index][target];

  let notPick = f(arr, index - 1, target, dp);
  let pick = f(arr, index - 1, target - arr[index], dp);

  return (dp[index][target] = pick || notPick);
}

console.log(f(array, array.length - 1, target, dp));

//////////////
/// Tabulation.....
// let array=[1,2,3,4];
// let target=6;
// let dp=Array.from({length:array.length},()=>Array(target+1).fill(false));
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
