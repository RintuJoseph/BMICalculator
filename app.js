const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});
app.post("/", function (req, res) {
  var age = Number(req.body.age);
  var weight = Number(req.body.weight);
  console.log(weight);
  var heigh = req.body.height;
  var height = Number(req.body.height) * 0.01;
  console.log(height);
  var result = weight / (height * height);
  console.log(result);
  result = result.toPrecision(3);
  console.log(result);
  res.render("results", {
    age: age,
    weight: weight,
    height: heigh,
    bmi: result,
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
