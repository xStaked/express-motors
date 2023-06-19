const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    updateUserById,
    createUser,
    deleteUserById,
} = require('../controllers/users.controller.js');

// Middlewares
const userMiddleware = require('../middlewares/user.middleware.js');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').all(userMiddleware.validateUser).get(getUserById).patch(updateUserById).delete(deleteUserById);

module.exports = router;
