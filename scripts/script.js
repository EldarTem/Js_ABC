let str = "12225534114";
let count = {};

for (let i of str) {
    if (count[i] == undefined) {
        count[i] = 1;
    } else {
        count[i] += 1;
    }
}
console.log(count);