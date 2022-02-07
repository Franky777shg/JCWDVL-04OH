const http = require("http");
const fs = require("fs");
const PORT = 2000;

let database = [
  {
    username: "Jennie",
    password: "jennie123",
    email: "jennie@gmail.com",
  },
  {
    username: "Rose",
    password: "rose123",
    email: "rose@gmail.com",
  },
  {
    username: "Lisa",
    password: "lisa123",
    email: "lisa@gmail.com",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let home = fs.readFileSync("home.html");
    res.writeHead(200, { "content-type": "text/html" });
    res.end(home);
  } else if (req.url === "/user") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(database));
  } else if (req.url === "/login") {
    let input = "";
    req.on("data", (chunk) => {
      input = chunk.toString();
    });
    req.on("end", () => {
      let obj = JSON.parse(input);
      let index = database.findIndex(
        (item) =>
          item.username === obj.username && item.password === obj.password
      );
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(database[index]));
    });
  } else if (req.url === "/register") {
    let input = "";
    req.on("data", (chunk) => {
      input = chunk.toString();
    });
    req.on("end", () => {
      let obj = JSON.parse(input);
      database.push(obj);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(database));
    });
  }
});

server.listen(PORT, () => console.log(`API Running at PORT = ${PORT} Guys`));
