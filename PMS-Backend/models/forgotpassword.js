+'use strict';
const { pendingRecordStatus } = require("../helpers/constant")
module.exports = function (sequelize, DataTypes) {
    const forgotpassword = sequelize.define('forgotpassword', {
       userId:DataTypes.INTEGER,
        email: DataTypes.STRING,
        token:DataTypes.STRING,
        recordStatus:DataTypes.INTEGER,
        recordStatus: { type: DataTypes.INTEGER, defaultValue: pendingRecordStatus, }
    }, {
        freezeTableName: true,
        tableName: 'forgotpassword'
    });
    return forgotpassword ;
};