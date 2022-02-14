const router = require("express").Router();

const { users } = require("../controllers");

const { body } = require("express-validator");

const registerValidation = [
  body("username")
    .notEmpty()
    .withMessage(`Username Can't Empty`)
    .isLength({ min: 6 })
    .withMessage(`Username must be at least 6 character`),
  body("password")
    .notEmpty()
    .withMessage(`Password Can't Empty`)
    .matches(/[!@#$%^&*]/)
    .withMessage(`Password must include symbol`)
    .isLength({ min: 6 })
    .withMessage(`Password must be at least 6 character`),
  body("email").isEmail().withMessage(`Email doesn't valid`),
];

router.get("/", users.getAllUsers);
router.get("/:id", users.getUserById);
router.post("/register", registerValidation, users.register);
router.post("/login", users.login);
router.delete("/delete/:id", users.deleteUser);

module.exports = router;
