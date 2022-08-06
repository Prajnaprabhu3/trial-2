const express = require('express')

// importing all functions from controllers 
const {
    getAllWorkout,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


//creates an instance of the router
const router = express.Router()

//routes

//Route to get all workouts
router.get('/', getAllWorkout)

// Route to GET a single workout
router.get('/:id', getSingleWorkout)

//POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)


// UPDATE a router 
router.patch('/:id', updateWorkout)



module.exports = router