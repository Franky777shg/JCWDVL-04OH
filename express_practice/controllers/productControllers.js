const products = [
  {
    id: 1,
    name: "banana",
    price: 2000,
  },
  {
    id: 2,
    name: "apple",
    price: 3000,
  },
  {
    id: 3,
    name: "orange",
    price: 4000,
  },
];

module.exports = {
  getAllProducts: (req, res) => {
    res.status(200).send(products);
  },
  getProductById: (req, res) => {
    let id = +req.params.id;
    let result = products.filter((item) => item.id === id);
    res.status(200).send(result[0]);
  },
  addProduct: (req, res) => {
    req.body.id = products[products.length - 1].id + 1;
    products.push(req.body);
    res.status(200).send(products);
  },
  deleteProduct: (req, res) => {
    let id = +req.params.id;
    let index = products.findIndex((item) => item.id === id);
    products.splice(index, 1);
    res.status(200).send(products);
  },
};
