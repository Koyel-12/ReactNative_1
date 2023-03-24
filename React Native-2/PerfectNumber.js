const num = 28;
const checkPerfectNumber = (num = 1) => {
   if(num === 1) {
      return false;
   };
   let sum = 1;
   for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) {
         sum = sum + i + num / i; if(sum > num) {
            return false;
         }
      };
   };
   return sum === num;
};
console.log(checkPerfectNumber(num));