const app = require('./app.js');
const { db } = require('./database/config.js');

db.authenticate()
    .then(() => {
        console.log('Database connected.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });

db.sync()
    .then(() => {
        console.log('Database synced.');
    })
    .catch((err) => {
        console.log('Unable to sync the database:', err);
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
