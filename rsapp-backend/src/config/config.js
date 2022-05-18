const { config } = require("dotenv");//importamos dotenv
config();

module.exports = {
    user: process.env.USER || "postgres",
    password: process.env.PASSWORD || "ojendiz2026",
    host: process.env.HOST || "localhost",
    port: process.env.DBPORT || 5432,
    database: process.env.DB || "rsapp_db",
}