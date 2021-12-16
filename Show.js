let data = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
];

// console.log(data[0]["title"]);

let show = (arrData) => {
  let result = "";

  arrData.forEach((item) => {
    let temp = "";

    for (let prop in item) {
      temp += `${prop}: ${item[prop]}, `;
    }

    temp = temp.slice(0, temp.length - 2);

    temp += "\n";

    result += temp;
  });

  return result;
};

console.log(show(data));
