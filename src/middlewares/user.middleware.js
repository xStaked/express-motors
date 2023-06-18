const User = require('../models/user.model');

exports.validateUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = User.findOne({
            where: {
                id,
                status: 'available',
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
