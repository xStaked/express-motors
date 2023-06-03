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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is up on PORT ${PORT}.`);
});
