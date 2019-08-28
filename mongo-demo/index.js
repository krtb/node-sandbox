const mongoose = require('mongoose');

//in real app, conection string would come from a config file
//add name of DB, mongo auto adds this name for us
// in reall app, would be better to use debug module instead of console, more constrol over debugging messages
mongoose.connect('mongodb://localhost/playground') 
    .then(()=> console.log('Connected to MongoDB'))
    .catch((err) => console.log('Could not connect to MongoDB', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: {type: Date, default: Date.now}, //defined with a default value
    isPublished: Boolean
});

//Need to compile the above Schema information into a model
//Classes, Objects
//Class = blueprint, Object is an instance of that blueprint

//second arg is schem that defines shape of documents in this collection
//pascal naming convention, uppercase means this is a class, not an object.
//camel case naming for our objects
const Course = mongoose.model('Course', courseSchema); //compiled into model, to get a Class

const course = new Course({
    name: 'Node.js Course',
    author: 'Mosh',
    tags: ['node', 'backend'],  // can have complex objects, not possible in relational DBs
    isPublished: true
}); 