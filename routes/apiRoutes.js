const router = require("express").Router();

const { Workout } = require("../models");

// GET all workouts
router.get("/api/workouts", (req, res) => {

    Workout.find().then((workouts) => {
        res.json(workouts);
    }).catch((err) => {
        res.status(500).json(err);
    });

});

// POST CREATES a workout
router.post("/api/workouts", (req, res) => {

    Workout.create(req.body).then((workout) => {
        res.json(workout);
    }).catch((err) => {
        res.status(500).json(err);
    });

});

//PUT updates and existing workout
router.put("/api/workouts/:id", (req, res) => {

    const newExercise = req.body;

    Workout.findByIdAndUpdate(req.params.id, {
        $push:
        {
            exercises: newExercise
        }
    },
    {
        new: true
    }
    ).then((workout) => {
        res.json(workout);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// GET all workouts for a specified range (number of days?)
router.get("/api/workouts/range", (req, res) => {

    Workout.find({}).limit(7)
        .then(workouts => {
            console.log(workouts);
            res.json(workouts);
        }).catch((err) => {
            res.status(500).json(err);
        });

});

module.exports = router;