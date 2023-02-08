'use strict';
const { pendingRecordStatus } = require("../helpers/constant")
module.exports = function (sequelize, DataTypes) {
    const users = sequelize.define('Users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        contactNumber: DataTypes.BIGINT,
        isDeleted: DataTypes.INTEGER,
        password: DataTypes.STRING,
        authtoken: DataTypes.STRING,
        screenAccess: DataTypes.STRING, 
        recordStatus:DataTypes.INTEGER,
        recordStatus: { type: DataTypes.INTEGER, defaultValue: pendingRecordStatus, }
    }, {
        freezeTableName: true,
        tableName: 'users'
    });
      return users;
    };