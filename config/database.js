const { Sequelize } = require('sequelize');

// Créez une instance de Sequelize avec les informations de connexion
const sequelize = new Sequelize('third_account', 'sa', 'Seb12345', {
        host: 'localhost',
        dialect: 'mssql',
    }
);

module.exports = sequelize;