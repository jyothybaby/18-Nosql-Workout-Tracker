const router = require("express").Router();
const db = require("../models/Workout.js");

//Creating a new workout

router.post("/api/workouts", ({body}, res) => {
    db.create(body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
} );
    




module.exports = router;



