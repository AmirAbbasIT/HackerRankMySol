function countingSort(arr) {
  let countingArray = new Array(100).fill(0);
  arr.forEach((element, index) => {
    countingArray[element] += 1;
  });
  return countingArray;
}