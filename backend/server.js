const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

var corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.options("*", cors());

app.get("/", (req, res, next) => {
  res.send("optimhire backend running");
});

const studentRoutes = require("./app/routes/studentRoutes");
const scoreRoutes = require("./app/routes/scoreRoutes");
app.use("/students", studentRoutes);
app.use("/scores", scoreRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`optimhire backend running on port ${port}`);
});
