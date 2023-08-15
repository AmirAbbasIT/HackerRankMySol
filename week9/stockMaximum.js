function stockmax(prices) {
  let profit = 0;
  let maxPrice = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    } else {
      profit += maxPrice - prices[i];
    }
  }

  return profit;
}