'use strict';
const { pendingRecordStatus } = require("../helpers/constant")
module.exports = function (sequelize, DataTypes) {
    const customers = sequelize.define('Customers', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        contactNumber: DataTypes.INTEGER,
        city: DataTypes.STRING,
        area: DataTypes.STRING,
         budget: DataTypes.INTEGER,
        recordStatus:DataTypes.INTEGER,
        recordStatus: { type: DataTypes.INTEGER, defaultValue: pendingRecordStatus, }
    }, {
        freezeTableName: true,
        tableName: 'customers'
    });
    return customers;
};
