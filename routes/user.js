const express = require("express");
const router = express.Router();

//Here we are using destructuring
const {loginUser, registerUser, getAllUsers} = require("../controller/user");


// router.get("/", userController.getAllUsers);

router.get("/", getAllUsers);

//Registering
router.post("/register", registerUser);


//Login
router.post("/login", loginUser);

// router.get("/:id", userController.getUserById);

// router.put("/:id", userController.updateUser);

// router.delete("/:id", userController.deleteUser);

module.exports = router;