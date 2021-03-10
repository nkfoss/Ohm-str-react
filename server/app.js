const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Workout = require("./models/workout");


const app = express();

mongoose
  .connect("mongodb://localhost:27017/ohmstr") // Whichever port mongo is listening on.
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // No matter what domain the req is from, it can access our resources.
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // More CORS stuff.
  next();
});


app.get("/api/workout", (req, res, next) => {
	Workout.findOne()
		.then( documents => {
      console.log(documents)
			res.send({
				message: "workout fetched",
				workout: documents
			})
	})
    .catch(error => {
      console.log(error)
    })
})

module.exports = app;
