function* getNextPrimeNumber() {
  for (let i = 2; i < Number.POSITIVE_INFINITY; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) yield i;
  }
}
function waiter(number, q) {
  let getPrime = getNextPrimeNumber();

  let answers = [];

  for (let i = 0; i < q; i++) {
    let prime = getPrime.next().value;

    let b = [];
    for (let j = 0; j < number.length; j++) {
      if (number[j] % prime === 0) {
        answers.push(number[j]);
      } else {
        b.push(number[j]);
      }
    }

    number = b.reverse();
  }

  answers = [...answers, ...number.reverse()];
  return answers;
}
