const router = require("express").Router();

const { users } = require("../controllers");

router.get("/", users.getAllUsers);
router.get("/:id", users.getUserById);
router.post("/register", users.register);
router.post("/login", users.login);
router.delete("/delete/:id", users.deleteUser);

module.exports = router;
