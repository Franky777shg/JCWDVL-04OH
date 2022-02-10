const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const PORT = 2000;

const server = express();

server.use(bodyparser.json());

server.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to my API</h1>");
});

const { productRouter, userRouter } = require("./routers");
server.use("/product", productRouter);
server.use("/user", userRouter);

server.listen(PORT, () => console.log(`Running at PORT : ${PORT}`));
