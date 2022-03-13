const express = require("express")
const { getUsers, createUser, getUser, deleteUser, updateUser } = require("../controllers/users")

const router = express.Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;