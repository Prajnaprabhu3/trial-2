
// Model 
const Workout = require('../models/workoutModel');


//get all workouts
const getAllWorkout = async (request, response) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    response.status(200).json(workouts);
}


//get a single workout
const getSingleWorkout = async (request, response) => {
    const { id } = request.params

    const workout = await Workout.findById(id);

    if (!workout) {
        return response.status(404).json({ error: 'No such workout' });
    }

    response.status(200).json(workout);
}


// create a new workout
const createWorkout = async (request, response) => {
    const { title, load, reps } = request.body;

    //add to database
    try {
        const workout = await Workout.create({ title, load, reps })
        response.status(200).json(workout)
    }
    catch (error) {
        response.status(400).json({ error: error.message })
    }

}

// delete a workout


//update a workout


module.exports = { createWorkout, getSingleWorkout, getAllWorkout }