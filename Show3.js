let data = [
  {
    apple: "apple",
    sugar: "medium",
    price: "standar",
  },
  {
    name: "banana",
    sugar: "low",
    price: "cheap",
  },
];

let show = (arrData) => {
  let result = [];

  arrData.forEach((item) => {
    let temp = {};

    for (let prop in item) {
      temp[item[prop]] = prop;
    }

    result.push(temp);
  });

  return result;
};

console.log(show(data));
