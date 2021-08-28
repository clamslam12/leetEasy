/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //https://www.youtube.com/watch?v=Q-8JkdUliVM&ab_channel=TerribleWhiteboard
    
    //using sliding window
    let profit = 0;
    for(let i =1; i<prices.length; i++){
        if(prices[i] > prices[i-1]){
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;
};
