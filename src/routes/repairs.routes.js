const express = require('express');
const router = express.Router();

const {
    getAllRepais,
    getRepairById,
    createRepair,
    updateRepairById,
    deleteRepairById,
} = require('../controllers/repairs.controller.js');

router.route('/').get(getAllRepais).post(createRepair);
router.route('/:id').get(getRepairById).patch(updateRepairById).delete(deleteRepairById);

module.exports = router;
