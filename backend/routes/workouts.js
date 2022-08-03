const express = require('express');

// importing all functions from controllers 
const {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout } = require('../controllers/workoutControllers');


//creates an instance of the router
const router = express.Router();

//routes

//Route to get all workouts
router.get('/', getAllWorkouts);


// Route to GET a single workout
router.get('/:id', getSingleWorkout)

//POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (request, response) => {
    response.json({ message: 'DELETE a new workout' })
})


// UPDATE a router 
router.patch('/:id', (request, response) => {
    response.json({ message: 'UPDATE a new workout' })
})


module.exports = router