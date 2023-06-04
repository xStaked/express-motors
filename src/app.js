const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const usersRoutes = require('./routes/users.routes');
app.use('/api/v1/users', usersRoutes);
module.exports = app;
