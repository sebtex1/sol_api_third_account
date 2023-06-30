const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importez l'instance Sequelize créée précédemment

const ThirdAccount = sequelize.define('ta_third_account', 
    {
        ta_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ta_create_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ta_update_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ta_delete_time: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        ta_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ta_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ta_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_complement: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_zip: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_siret: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_vat: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_naf_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ta_email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
    // https://sequelize.org/docs/v6/core-concepts/paranoid/
    paranoid: true,
    createdAt: 'ta_create_time',
    updatedAt: 'ta_update_time',
    deletedAt: 'ta_delete_time',
    hooks: {
        beforeUpdate: (thirdAccount) => {
            thirdAccount.ta_update_time = new Date();
        }
    }
});

module.exports = ThirdAccount;