const { User } = require('../models/user.model');
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                status: 'available',
            },
        });

        if (!users) {
            return res.status(404).json({
                status: 'error',
                message: 'No users found',
            });
        }

        res.status(200).json({
            status: 'success',
            results: users.length,
            message: 'All users',
            data: {
                users,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to get all users',
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const { user } = req;

        res.status(200).json({
            status: 'success',
            message: `User with id ${user.id}`,
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to get user',
            err,
        });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                status: 'error',
                message: 'Missing required fields',
            });
        }

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (user) {
            return res.status(400).json({
                status: 'error',
                message: 'Email already exists',
            });
        }

        await User.create({
            name,
            email,
            password,
            role,
        });
        res.status(200).json({
            status: 'success',
            message: 'User created',
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to create user',
        });
    }
};
const updateUserById = async (req, res) => {
    try {
        const { name, email } = req.body;
        const { user } = req;

        await user.update({
            name,
            email,
        });
        res.status(200).json({
            status: 'success',
            message: `User with id ${user.id} updated`,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to update user',
        });
    }
};

const deleteUserById = async (req, res) => {
    try {
        const { user } = req;

        await user.update({
            status: 'unavailable',
        });
        res.status(200).json({
            status: 'success',
            message: `User with id ${user.id} deleted`,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to delete user',
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    createUser,
    deleteUserById,
};
