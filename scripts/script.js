let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
	console.log(key); // выведет ключи
}

for (let key in obj) {
	console.log(obj[key]); // выведет элементы
}