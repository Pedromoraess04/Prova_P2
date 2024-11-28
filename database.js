const sequelize = require('./config/sequelize');

sequelize.authenticate()
    .then(() => {
        console.log('Database connected!');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync({ force: false }) 
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });
