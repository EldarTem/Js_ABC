let date = new Date();

function addZero(num) {
   if (num >= 0 && num <= 9) {
      return "0" + num;
   } else {
      return num;
   }
}

let date1 = addZero(date.getDate()) +"-" + addZero(date.getMonth() + 1) +"-" + date.getFullYear();

console.log(date1);

let date2 = date1.split("-").join(".");

console.log(date2);