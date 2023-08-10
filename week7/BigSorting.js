function bigSorting(unsorted) {
  let sorted = unsorted
    .map((a) => BigInt(a))
    .sort((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });
  return sorted;
}

// Sorting Big Numbers in String Form
