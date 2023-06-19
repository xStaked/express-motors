const { Repair } = require('../models/repairs.model');

exports.validateRepair = async (req, res, next) => {
    try {
        const { id } = req.params;

        const repair = await Repair.findOne({
            where: {
                id,
                status: 'pending',
            },
        });

        if (!repair) {
            return res.status(404).json({ message: 'Repair not found' });
        }
        console.log(repair);
        req.repair = repair;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
