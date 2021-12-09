let number = 9474

let numberToString = number.toString()

let counter = 0

for(let i = 0; i < numberToString.length; i++) {
    counter += Math.pow(+numberToString.charAt(i), numberToString.length); 
}

if (number === counter) {
    console.log(`${number} IS Armstrong Number`)
} else {
    console.log(`${number} IS NOT Armstrong Number`)
}