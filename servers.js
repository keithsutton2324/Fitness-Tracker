const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3020;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
