let array = [3, 1, 2];
/// FInd Only first Occurence SubSequence Sum whose sum is 5...
// let result=[]
function subS(result, index, n, sum) {
  if (index === n) {
    if (result === sum) {
      console.log(result);
      return true;
    } else {
      return false;
    }
  }
  result += array[index];
  if (subS(result, index + 1, n, sum)) {
    return true;
  }

  result -= array[index];

  if (subS(result, index + 1, n, sum)) {
    return true;
  }

  return false;
}

subS(0, 0, array.length, 3);
