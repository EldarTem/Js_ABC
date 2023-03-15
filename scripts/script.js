let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter1 = 0;
let counter2 = 0;
for (let elem of arr) {
	if (elem == '2') {
		counter1++;
	}
  if (elem == '3') {
		counter2++;
	}
}

console.log(counter1, counter2);