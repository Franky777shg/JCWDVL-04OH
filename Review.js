// callback => function yang dipanggil sebagai argument ketika sebuah function lain dipanggil

// let greet = (text) => { // text sebagai parameter
//   console.log(text);
// };

// greet("Hello World!"); // "Hello World!" sebagai argument

let arr = [1, 2, 3];

arr.forEach((item) => {
  console.log(item);
});

// return => keyword di dalam function untuk mengeluarkan sebuah nilai dari function tersebut

let play = () => {
  return "Dota2";
};

// play() = 'Dota2'

console.log(play());

// sort
let arr2 = [3, 1, 2];
arr2 = arr2.sort((a, b) => a - b);
// kalau a - b itu ascending
// kalau b - a itu descending

console.log(arr2);
