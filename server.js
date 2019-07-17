const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

var Users = require("./routes/Users");
app.use("/users", Users);

app.post("/submit", function(req, res) {
  // Create a new user using req.body
  User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Connect to the Mongo DB
const mongoURI = "mongodb://localhost:27017/CurbUser";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now on PORT ${PORT}!`);
});
