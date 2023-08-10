function migratoryBirds(arr) {
  let map = {};
  arr.forEach((val) => {
    if (map[val]) {
      map[val] += 1;
    } else {
      map[val] = 1;
    }
  });
  let bird = { max: 0, id: 0 };
  for (let [key, val] of Object.entries(map)) {
    if (val > bird.max) {
      bird.max = val;
      bird.id = key;
    }
    if (val === bird.max) {
      if (bird.id > key) {
        bird.id = key;
      }
    }
  }

  return parseInt(bird.id);
}
