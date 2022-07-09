import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({
    limit:
        '30mb',
    extended: true
}));


app.use(bodyParser.urlencoded({
    limit:
        '30mb',
    extended: true
}));


app.use(cors());


const CONNECTION_URL = 'mongodb+srv://prajna:Prajna30@cluster0.29ip9jc.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// makes sure we dont get any warnings in the console - is depricated now
// mongoose.set('useFindAndModify', false);