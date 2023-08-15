let array = [3, 1, 2];

// let result=[]
function subS(result, index, n) {
  if (index === n) {
    console.log(result);
    return;
  }
  result.push(array[index]);
  subS(result, index + 1, n);

  result.pop();

  subS(result, index + 1, n);
}
subS([], 0, array.length);
