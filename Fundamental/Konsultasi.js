// 1. if else vs switch case
let number = 12
if (number % 2 === 0) {
    console.log('genap')
} else {
    console.log('ganjil')
}

let number2 = 13
switch(number2 % 2 === 0) {
    case true:
        console.log('genap')
        break
    default:
        console.log('ganjil')
}