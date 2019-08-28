const mongoose = require('mongoose');

//in real app, conection string would come from a config file
//add name of DB, mongo auto adds this name for us
// in reall app, would be better to use debug module instead of console, more constrol over debugging messages
mongoose.connect('mongodb://localhost/playground') 
    .then(()=> console.log('Connected to MongoDB'))
    .catch((err) => console.log('Could not connect to MongoDB', err))

const courseSchema = new mongoose.Schema({

});

