const { User } = require('../models/user.model');
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                status: true,
            },
        });

        if (!users) {
            return res.status(404).json({
                status: 'error',
                message: 'No users found',
            });
        }

        res.json({
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
        const id = req.params.id;
        const user = await User.findOne({
            where: {
                id,
            },
        });

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'No user found',
            });
        }

        res.json({
            status: 'success',
            message: `User with id ${id}`,
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to get user',
        });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password, role, status } = req.body;
        if (!name || !email || !password || !role || !status) {
            return res.status(400).json({
                status: 'error',
                message: 'Missing required fields',
            });
        }
        await User.create({
            name,
            email,
            password,
            role,
            status,
        });
        res.json({
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
    const id = req.params.id;
    const body = req.body;
    const name = body.name;
    const email = body.email;
    res.send(`User with id ${id} updated`);
};

const deleteUserById = async (req, res) => {
    const id = req.params.id;
    res.send(`User with id ${id} deleted`);
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    createUser,
    deleteUserById,
};
