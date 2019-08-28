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

async function creatCourse(){
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: ['angular', 'frontend'],  // can have complex objects, not possible in relational DBs
        isPublished: true
    });

    //mongo will assign a unique identifier
    //when using await, code needs to be inside an async function
    const result = await course.save() //dealing with an async operation, need time to save in DB, result will be ready in the future, will return promise
    console.log(result)
}

async function getCourses(){
    //eq = equal to
    //ne = not equal
    //gt = greater than
    //gte = greater than or equal to
    //lt = les than
    //lte = less than or equal to
    //in
    //nin = not in

    //course class has methods that are available to it, like find
    const courses = await Course
    //sorting by 1 is descending order, ascending order would be with -1
        .find({  author: 'Mosh', isPublished: true })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
    console.log(courses)
}

getCourses();