let users = [
  {
    id: 1,
    username: "banana",
    password: "asd123",
    email: "banana@gmail.com",
  },
  {
    id: 2,
    username: "kiwi",
    password: "asd123",
    email: "kiwi@gmail.com",
  },
  {
    id: 3,
    username: "melon",
    password: "asd123",
    email: "melon@gmail.com",
  },
];

module.exports = {
  getAllUsers: (req, res) => {
    try {
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getUserById: (req, res) => {
    try {
      let id = +req.params.id;
      let result = users.filter((item) => item.id === id);
      res.status(200).send(result[0]);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  register: (req, res) => {
    try {
      let checkUser = users.filter(
        (item) =>
          item.username === req.body.username || item.email === req.body.email
      );
      if (checkUser.length !== 0) {
        res.status(400).send("Username or Email Already Exist");
      } else {
        req.body.id = users[users.length - 1].id + 1;
        users.push(req.body);
        res.status(200).send(users);
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },
  login: (req, res) => {
    try {
      let loginUser = users.filter(
        (item) =>
          item.username === req.body.username &&
          item.password === req.body.password
      );
      if (loginUser.length === 0) {
        res.status(400).send("Wrong Username or Password");
      } else {
        res.status(200).send(loginUser[0]);
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },
  deleteUser: (req, res) => {
    try {
      let id = +req.params.id;
      let index = users.findIndex((item) => item.id === id);
      users.splice(index, 1);
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
