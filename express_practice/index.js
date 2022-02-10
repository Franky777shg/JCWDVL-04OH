const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const PORT = 2000;

const server = express();

server.use(bodyparser.json());

server.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to my API</h1>");
});

const { productRouter } = require("./routers");
server.use("/product", productRouter);

server.listen(PORT, () => console.log(`Running at PORT : ${PORT}`));
