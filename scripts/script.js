let num = 33;

if (num >= 10 && num <= 99){
    var sum, abc = 0;
    while (num) {
        abc = num % 10;
        num = (num - abc) / 10;
        sum += abc;
    }
console.log(sum)
} if (sum <= 9){
    console.log("cумма однозначное число")
} else {
    console.log("cумма двухзначное число")
}