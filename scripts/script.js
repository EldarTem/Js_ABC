let arr1 = [12, 49, 0, 30, 57];
for (let i of arr1) {
    console.log(i);
    if (i == 0) {
        console.log("Встретился элемент 0")
        break;
    }
}



let arr2 = [12, 49, 0, 30, -5];
let sum1 = 0;
for (let i = 0; i <= arr2.length - 1; i++) {
    sum1 += arr2[i];
    console.log(sum1);
    if (i > 0) {
        console.log("Встретился первый отрицательный элемент.")
        break;
    }
}



let arr3 = [12, 49, 17, 30, 3];
for (let i = 0; i <= arr3.length - 1; i++) {
    if (arr3[i] == 3) {
        console.log("Позиция первого числа 3 в массиве: " + (i + 1));
        break;
    }
}



let sum2 = 0;
let i = 0;
let count = 0;
while (sum2 <= 100) {
    i++;
    sum2 += i;
    count += 1;
    if (sum2 > 100) {
        console.log("Чтобы получилось число больше 100, нужно сложить: " + count + " чисел");
        break;
    }
}