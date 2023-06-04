const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    updateUserById,
    createUser,
    deleteUserById,
} = require('../controllers/users.controller.js');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).patch(updateUserById).delete(deleteUserById);

module.exports = router;
