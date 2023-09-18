const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Surchage du formatage du fuseau horaire pour MSSQL
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

const Contact = sequelize.define('ta_contact', 
    {
        ta_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ta_third_account_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ta_first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ta_last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ta_job: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_cell_phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ta_email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
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
    },
    {
        // https://sequelize.org/docs/v6/core-concepts/paranoid/
        paranoid: true,
        createdAt: 'ta_create_time',
        updatedAt: 'ta_update_time',
        deletedAt: 'ta_delete_time',
        hooks: {
            beforeUpdate: (contact) => {
                contact.ta_update_time = new Date();
            }
        }
    }
);

module.exports = Contact;