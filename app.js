const express =require('express');
const app = express();
const tasks = require('./routes/tasks');
const mongoose = require('mongoose')
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE Connection.....//
const MONGO_URL = "mongodb+srv://shubham40:Pass%40123@cluster0.wlhsk.mongodb.net/?retryWrites=true&w=majority"
const PORT = 8000
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Database Connection Successfully!!..."))
    .catch((err) => {
        console.log(err);
    });



// routes

app.use('api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);


const port = PORT || 8000;
app.listen(port, () => {
    console.log('Server Started on Port '+ port);
});
