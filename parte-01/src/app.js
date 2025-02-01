const connectDatabase = require("./config/database");
const router = require("./routes/serieRoutes");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log("Tipo de requisição: " + req.method);
    next();
});
app.use("/series", router);

dotenv.config();
connectDatabase();

module.exports = app;