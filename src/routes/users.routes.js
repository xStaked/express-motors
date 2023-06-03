const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
} = require("../controllers/users.controller.js");

router.get("/", getAllUsers);
router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);
router.post("/", createUser);

module.exports = router;
