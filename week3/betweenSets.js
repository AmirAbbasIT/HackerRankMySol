function getTotalX(a, b) {
  let start = a.at(a.length - 1);
  let end = b.at(0);

  let numbers = [];

  while (start <= end) {
    let flag = true;
    a.forEach((val) => {
      if (start % val !== 0) {
        flag = false;
      }
    });
    b.forEach((val) => {
      if (val % start !== 0) {
        flag = false;
      }
    });
    if (flag) numbers.push(start);
    start += 1;
  }

  return numbers.length;
}
