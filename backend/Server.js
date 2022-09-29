var express = require("express");
var app = express();
var cors = require("cors");
var connection = require("./db");
var userRoutes = require("./routes/users")
var authRoutes = require("./routes/auth")
require("dotenv").config();

connection()

app.use(express.json());
app.use(cors());

app.use("/api/users/", userRoutes)
app.use("/api/auth/", authRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listening to port ${port}`));
