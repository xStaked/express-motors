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

        res.json({
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
        const { id } = req.params;
        const repair = await Repair.findOne({
            where: {
                id,
            },
        });

        if (!repair) {
            return res.status(404).json({
                status: 'error',
                message: 'No repair found',
            });
        }

        res.json({
            status: 'success',
            message: `Repair with id ${id}`,
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

        res.status(201).json({
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
        });
    }
};

const updateRepairById = async (req, res) => {
    try {
        const { id } = req.params;

        const repair = await Repair.findOne({
            where: {
                id,
            },
        });

        if (!repair) {
            return res.status(404).json({
                status: 'error',
                message: 'No repair found',
            });
        }

        await repair.update({
            status: 'completed',
        });

        res.json({
            status: 'success',
            message: `Repair with id ${id} updated`,
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
        const { id } = req.params;
        const repair = await Repair.findOne({
            where: {
                id,
                status: 'pending',
            },
        });

        if (!repair) {
            return res.status(404).json({
                status: 'error',
                message: 'No repair found',
            });
        }

        await repair.update({
            status: 'cancelled',
        });

        res.json({
            status: 'success',
            message: `Repair with id ${id} deleted`,
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
