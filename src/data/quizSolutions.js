/** --- solutions --- **/

let solutions = {};

solutions.sumDownBy2 = function sumDownBy2(n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
      return 1;
    }
    else {
      return n + this.sumDownBy2(n-2);
    }
 }
 
 
solutions.makes8 = function makes8(a, b) {
  return ((a == 8 || b == 8) || (a + b == 8));
};
 
solutions.countOdds = function countOdds(nums) {
   let count = 0;
 
     for (let i = 0; i < nums.length; i++){
         if (nums[i]%2 === 1){
             count += 1;
         }
     }
     return count;
 }
 
 solutions.fib = function fib(n) {
   if (n < 2) {
       return n;
   };
     return this.fib(n-1) + this.fib(n-2);
 }

 module.exports = solutions;