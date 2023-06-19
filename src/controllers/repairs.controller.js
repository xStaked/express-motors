const { Repair } = require('../models/repairs.model');

const getAllRepais = async (req, res) => {
    try {
        const repairs = await Repair.findAll({
            where: {
                status: 'pending',
            },
        });

        if (!repairs) {
            return res.status(404).json({
                status: 'error',
                message: 'No repairs found',
            });
        }
        res.status(200).json({
            status: 'success',
            results: repairs.length,
            message: 'All repairs',
            data: {
                repairs,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to get all repairs',
        });
    }
};

const getRepairById = async (req, res) => {
    try {
        const { repair } = req;

        res.status(200).json({
            status: 'success',
            message: `Repair with id ${repair.id}`,
            data: {
                repair,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to get repair',
        });
    }
};

const createRepair = async (req, res) => {
    try {
        const { date, userId } = req.body;
        const repair = await Repair.create({
            date,
            userId,
        });

        res.status(200).json({
            status: 'success',
            message: 'Repair created',
            data: {
                repair,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to create repair',
            error: err,
        });
    }
};

const updateRepairById = async (req, res) => {
    try {
        const { repair } = req;

        await repair.update({
            status: 'completed',
        });

        res.status(200).json({
            status: 'success',
            message: `Repair with id ${repair.id} updated`,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to update repair',
        });
    }
};

const deleteRepairById = async (req, res) => {
    try {
        const { repair } = req;
        await repair.update({
            status: 'cancelled',
        });

        res.status(200).json({
            status: 'success',
            message: `Repair with id ${repair.id} deleted`,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Unable to delete repair',
        });
    }
};

module.exports = {
    getAllRepais,
    getRepairById,
    createRepair,
    updateRepairById,
    deleteRepairById,
};
