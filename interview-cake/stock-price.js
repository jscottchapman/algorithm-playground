// Suppose we could access yesterday's stock prices as an array, where:
// The indices are the time in minutes past trade opening time, which was 9:30am
// local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.
// Write an efficient function that takes stockPricesYesterday and returns
// the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock
// yesterday.
// No "shorting"—you must buy before you sell. You may not buy and sell in the
// same time step (at least 1 minute must pass).

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

const getMaxProfit = (priceArray) => {
  let sorted = [...stockPricesYesterday].sort((a, b) => a - b);
  console.log(`Sorted: ${sorted}`);
  console.log( `stockPricesYesterday: ${stockPricesYesterday}`);
  let maxProfit = 0;
  for(let i =0; i < 3; i++) {
    let min = sorted[i];
    let max = sorted[sorted.length - i - 1];
    let minIndex = stockPricesYesterday.findIndex(el => el === min);
    let maxIndex = stockPricesYesterday.findIndex(el => el === max);
    let difference = max - min;
    console.log(`minIndex: ${minIndex}`);
    console.log(`maxIndex: ${maxIndex}`);
    if(minIndex < maxIndex && difference > maxProfit) {
      maxProfit = max - min;
    }
  }
  return maxProfit;
}


console.log(`Max profit: ${getMaxProfit(stockPricesYesterday)}`);
