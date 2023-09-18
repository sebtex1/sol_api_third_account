require('dotenv').config();
const { Sequelize } = require('sequelize');

// Création une instance de Sequelize avec les informations de connexion
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_SERVER || 'localhost',
        dialect: 'mssql',
        dialectOptions: {
            options: {
                useUTC: false,
                dateFirst: 1,
            },
        },
    }
);

module.exports = sequelize;