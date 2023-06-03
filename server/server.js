const express = require("express");
const cors = require("cors");
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(cors());

const { PORT } = process.env;
const { login } = require("./ctrl.js")

app.post("/login", login)


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))