require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

//creating an express app
const app = express();

// middleware 
app.use(express.json())

app.use((request, result, nextFunction) => {
    console.log(request.path, request.method);
    nextFunction();
})


// too react to request we are setting up routes
app.use('/api/workouts', workoutRoutes)



//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen to a certain port number / listen for request on a certain port
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port: http://localhost:${process.env.PORT}`);
        })

    })
    .catch((error) => {
        console.log(error)
    })

// to react to request we are setting up routes
// app.get('/', (request, response) => {
//     response.json({ message: "Welcome to my app" })
// })


