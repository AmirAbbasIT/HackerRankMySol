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
