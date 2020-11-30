const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");

app.use("/posts", postsRoute);
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

app.listen(3000);
