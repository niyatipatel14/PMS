require('dotenv').config();
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const Users = require("./users");
const Customers = require("./customers")
const Properties = require('./properties');
const Visitedproperties = require('./visitedproperties');
const config = require("../config/database")[env];
const models = {};
let sequelize;
sequelize = new Sequelize(
  database,
  username,
  password,
  config
);
const Op = sequelize.Op;
[Users, Visitedproperties, Properties, Customers].forEach(modelCreator => {
  const model = modelCreator(sequelize, Sequelize.DataTypes);
  models[model.name] = model;
});
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize ;
module.exports = { models, Op };