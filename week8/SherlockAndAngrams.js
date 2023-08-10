function sherlockAndAnagrams(s) {
  let count = 0;
  let list = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      let w = s.slice(i, j);
      list.push(w.split("").sort().join(""));
    }
  }
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] === list[j]) {
        count++;
      }
    }
  }
  return count;
}
