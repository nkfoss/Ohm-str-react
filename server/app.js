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
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET"
  )
  next();
});

//===============================================================================

app.put("/api/workout/save", (req, res, next) => {
  Workout.updateOne(
    { date: req.body.date }, // A query to match a document on.
    { $set: {
      bodyweight: req.body.bodyweight,   // The fields to update (excluding _id and date)
      exercises: req.body.exercises,
      notes: req.body.notes
    }},
    { upsert: true }  // If no matching document found, then create one.
  )
    .then( acknowledge => res.send({ message: "Workout saved successfully.", acknowledge: acknowledge }) )
    .catch( error => res.send({ data: error }) )
})

app.get("/api/workout/:dateString", (req, res, next) => {
  console.log(req.params.dateString)
	Workout.findOne({
    date: req.params.dateString
  })
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
