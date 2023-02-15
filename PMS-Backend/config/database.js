require("dotenv").config();
module.exports = {
    development: {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false,
        affectedRows: true
    },
};







