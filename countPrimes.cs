using System;
using System.Collections.Generic;
public class Solution {
    public int CountPrimes(int n) {
        //sieve of erotosthenes
        
        //mark all nums less than n true
        List<bool> nums = new List<bool>();
        int primeCount = 0;
        for(int i=0;i<n;i++){
            nums.Add(true);
        }
        
        //for each num that is true true, check all its multiples and mark false
        //1 is not prime number
        for(int i=2; i*i < n;i++){
            if(nums[i] == true){
                //check all of its multiples and mark as false
                for(int j=2; j*i < n;j++){
                    nums[j*i] = false;
                }
            }
        }
        
        //count occurences of trues
        for(int i=2; i< n;i++){
            if(nums[i] == true){
                primeCount++;
            }
        }
        return primeCount;
        
    }
}
