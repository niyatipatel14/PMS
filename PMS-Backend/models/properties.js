'use strict';
const { pendingRecordStatus } = require("../helpers/constant")
module.exports = function (sequelize, DataTypes) {
    const properties = sequelize.define('Properties', {
        propertyName: DataTypes.STRING,
        email: DataTypes.STRING,
        contactNumber: DataTypes.INTEGER,
        society: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        pincode: DataTypes.INTEGER,
        address: DataTypes.STRING,
        propertyType: DataTypes.STRING,
        recordStatus: DataTypes.INTEGER,
        recordStatus: { type: DataTypes.INTEGER, defaultValue: pendingRecordStatus, }

    }, {
        freezeTableName: true,
        tableName: 'properties'
    });
    return properties;
};