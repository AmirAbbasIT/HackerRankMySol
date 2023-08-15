///
let array = [3, 1, 2];
/// FInd all SubSequences Sum whose sum is 5...
// let result=[]
function subS(result, index, n, sum) {
  if (index === n) {
    if (result === sum) console.log(result);
    return;
  }
  result += array[index];
  subS(result, index + 1, n, sum);

  result -= array[index];

  subS(result, index + 1, n, sum);
}

subS(0, 0, array.length, 3);
