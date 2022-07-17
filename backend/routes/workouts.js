const express = require('express');

//creates an instance of the router
const router = express.Router();

//routes
//Route to get all workouts
router.get('/', (request, response) => {
    response.json({ message: "Get all workouts" })
})

// Route to GET a single workout
router.get('/:id', (request, response) => {
    response.json({ message: "GET a single workout" })
})

//POST a new workout
router.post('/', (request, response) => {
    response.json({ message: 'POST a new workout' })
})

// DELETE a workout
router.delete('/:id', (request, response) => {
    response.json({ message: 'DELETE a new workout' })
})


// UPDATE a router 
router.patch('/:id', (request, response) => {
    response.json({ message: 'UPDATE a new workout' })
})


module.exports = router