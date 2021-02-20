//var models = require("../models");

const Exercise = require("../models/Exercise.js");

module.exports = function(app) {
//getLastWorkout
app.get("/api/workouts", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//createWorkout
//app.put("/api/workouts/:id", ({ body }, res) => {
app.put("/api/workouts/1", ({ body }, res) => {
   Exercise.create(body)
     .then(dbExercise => {
       res.json(dbExercise);
     })
     .catch(err => {
       res.status(400).json(err);
     });
 });
 
 // getWorkoutsInRange
 app.post("/api/workouts", (req, res) => {
   Exercise.find({})
     .sort({ date: -1 })
     .then(dbExercise => {
       res.json(dbExercise);
     })
     .catch(err => {
       res.status(400).json(err);
     });
 });
 
 app.post("/api/workouts/range", ({ body }, res) => {
   Exercise.insertMany(body)
     .then(dbExercise => {
       res.json(dbExercise);
     })
     .catch(err => {
       res.status(400).json(err);
     });
 });
 
}
