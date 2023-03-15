// Метод Math.pow возводит число в заданную степень

console.log(Math.pow(2, 10));

// Метод Math.sqrt возвращает квадратный корень числа.

console.log(Math.sqrt(245));

let arr = [4, 2, 5, 19, 13, 0, 10];
let result = 0;

for (let item of arr) {
   result += (Math.pow(item, 3));
}

console.log(Math.sqrt(result));

// Метод Math.round выполняет округление до ближайшего целого числа по правилам математического округления.
// Метод Math.ceil производит округление дробного числа до целого всегда в большую сторону.
// Метод Math.floor производит округление числа до целых всегда в меньшую сторону.
// Метод toFixed производит округление числа до указанного знака в дробной части.
// Метод toPrecision округляет число до заданного знака. В отличие от Math.round округление можно проводить не только в дробной части.

let num = 245;

let result1 = Math.round(Math.sqrt(num));
console.log(result1);

let result2 = Math.sqrt(num);
console.log(result2.toPrecision(3));

let result3 = Math.sqrt(num);
console.log(result3.toPrecision(4));

let num1 = 587;

let obj = {
   floor: null,
   ceil: null,
}

let result4 = Math.sqrt(num1)
obj.floor = Math.floor(result4);

let result5 = Math.sqrt(num1);
obj.ceil = Math.ceil(result5);

console.log(obj)

// Метод Math.max возвращает максимальное число из группы чисел, переданных в функцию.
// Метод Math.min возвращает минимальное число из группы чисел, переданных параметрами.

console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// Метод Math.random возвращает случайное дробное число от 0 до 1.

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100))

let newArr = [];

for (let i = 1; i <= 10; i++) {
   newArr.push(getRandomInt(1, 1000));
};

console.log(newArr)

// Метод Math.abs возвращает модуль числа, то есть из отрицательного числа делает положительное.

let a = -12, b = -6;

console.log(Math.abs(a - b));