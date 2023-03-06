'use strict';
const { pendingRecordStatus } = require("../helpers/constant")
module.exports = function (sequelize, DataTypes) {
    const customers = sequelize.define('Customers', {
       userId:DataTypes.INTEGER,
        email: DataTypes.STRING,
        token:DataTypes.STRING,
        recordStatus:DataTypes.INTEGER,
        recordStatus: { type: DataTypes.INTEGER, defaultValue: pendingRecordStatus, }
    }, {
        freezeTableName: true,
        tableName: 'forgotpassword'
    });
    return customers;
};