/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const L = prices.length;
    let max = 0;
    let min = 100000000;

    for (let i = 1; i < L; i++) { 
        min = Math.min(min, prices[i-1]);
        const profit = prices[i] - min;
        max = Math.max(max, profit);
    }

    return max;
};