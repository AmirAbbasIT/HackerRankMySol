function countSort(arr) {
  let help = [];
  for (let i = 0; i < arr.length; i++) {
    let [x, s] = arr[i];
    if (i < arr.length / 2) {
      s = "-";
    }
    if (help[x]) {
      help[x].push(s);
    } else {
      help[x] = [s];
    }
  }
  console.log(help.toString().replaceAll(",", " ").trim());
}
