/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for(let i = 0; i<n; i++){
        let currentNum = i + 1;
        if(currentNum%3 == 0 && currentNum%5 == 0){
            answer[i] = 'FizzBuzz';
        } else if(currentNum%3 == 0){
            answer[i] = 'Fizz';
        } else if(currentNum%5 == 0){
            answer[i] = 'Buzz';
        } else {
            answer[i] = currentNum.toString();
        }
    }
    return answer;
};
