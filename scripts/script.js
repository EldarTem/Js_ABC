let day = 12;

if (day <= 10){
    console.log("находится в первой декаде")
} else if (day >= 11 && day <= 20){
    console.log("находится во второй декаде")
} else if (day >= 21 && day<=31){
    console.log("находится в третьей декаде")
} else {
    console.log("число выходит за диапазон дозволенного")
}