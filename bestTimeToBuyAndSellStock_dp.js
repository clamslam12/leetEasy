/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //https://www.youtube.com/watch?v=mmIMpgh67vg&ab_channel=TerribleWhiteboard
    //7,1,5,3,6,4
    let minBuyPrice = Infinity;
    let profit = 0;
    for(let i=0;i<prices.length;i++){
        //buy?
        if(prices[i] < minBuyPrice){
           minBuyPrice = prices[i]; 
        } else if (prices[i] - minBuyPrice > profit){//sell?
           profit =  prices[i] - minBuyPrice;
        }
    }
    return profit;
};
