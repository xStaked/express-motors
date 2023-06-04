const express = require('express');
const app = express();
const cors = require('cors');
const usersRoutes = require('./routes/users.routes');
const repairRoutes = require('./routes/repairs.routes');
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairRoutes);
module.exports = app;
