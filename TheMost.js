let arr = [3, 1, 3, "a", 4, "a", 3];

let item;
let total = 0;

for (let i = 0; i < arr.length; i++) {
  let counter = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      counter++;
    }
  }

  if (counter > total) {
    item = arr[i];
    total = counter;
  }
}

console.log(`${item} is the most with ${total} items`);
