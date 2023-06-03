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
    const id = req.params.id;
    res.send(`User with id ${id}`);
};

const updateUserById = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const name = body.name;
    const email = body.email;
    res.send(`User with id ${id} updated`);
};

const createUser = async (req, res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const password = body.password;
    const role = body.role;
    res.send(`User ${name} created`);
    //   res.json({
    //     name,
    //     email,
    //     password,
    //     role,
    //     message: `User ${name} created`,
    //   });
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
