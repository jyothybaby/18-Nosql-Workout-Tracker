const router = require("express").Router();
const db = require("../models/index");

//Creating a new workout

router.post("/api/workouts", async ({body}, res) => {
    db.create(body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
} );
    
// Getting all workout

router.get("/api/workouts", (req, res) => {
    db.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
} );

//Update a workout by id

router.put("/api/workouts/:id",({body, params }, res) => {
    db.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}},
        { new: true, runValidators: true }
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

// Showing by range
router.get("/api/workouts/range", (req, res) => {
    db.find({}).sort( { "day": -1 }).limit(7)
    .then(data => {
        res.json(data); 
    })
    .catch(err => {
        res.status(400).json(err);
    });
}); 



module.exports = router;



