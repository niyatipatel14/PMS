'use strict';
const { pendingRecordStatus } = require("../helpers/constant")
module.exports = function (sequelize, DataTypes) {
    const visitedproperties = sequelize.define('Visitedproperties', {
        customerId:DataTypes.INTEGER,
        propertyId:DataTypes.INTEGER,
        isVisited:DataTypes.INTEGER,
        recordStatus:DataTypes.INTEGER,
        recordStatus: { type: DataTypes.INTEGER, defaultValue: pendingRecordStatus, }
    }, {
        freezeTableName: true,
        tableName: 'visitedproperties'
    });
      return visitedproperties;
    };
