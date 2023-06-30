const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importe l'instance Sequelize créée précédemment

// Surchage du formatage du fuseau horaire pour MSSQL
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

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
            defaultValue: null,
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
            defaultValue: null,
        },
        ta_complement: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_zip: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_city: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_country: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_siret: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_vat: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_naf_code: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_website: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
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