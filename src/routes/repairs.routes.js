const express = require('express');
const router = express.Router();

const {
    getAllRepais,
    getRepairById,
    createRepair,
    updateRepairById,
    deleteRepairById,
} = require('../controllers/repairs.controller.js');

// Middlewares
const repairMiddleware = require('../middlewares/repairs.middleware.js');

router.route('/').get(getAllRepais).post(createRepair);

router
    .route('/:id')
    .all(repairMiddleware.validateRepair)
    .get(getRepairById)
    .patch(updateRepairById)
    .delete(deleteRepairById);

module.exports = router;
