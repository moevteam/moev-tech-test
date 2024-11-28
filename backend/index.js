const express = require("express");
var cors = require("cors");
const app = express();
var electrons = require("./data/electrons.js");

app.use(cors());

app.get("/electrons", (req, res, next) => {
  res.send(electrons);
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`From port ${port}`);
});
