let i = 0;

function calc(x) {
   for (;; i++) {
      x = x / 2;
      if (x <= 10) {
         return i;
      } 
   }
}

console.log(calc(100));