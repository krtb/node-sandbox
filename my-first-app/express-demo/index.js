const debug = require('debug')('app:startup') 
const config = require('config');
const Joi = require('joi')
// what is returend from the above module is a class, use Pascal Naming Convention to name our classes
const express = require('express'); //returns a function, that we will call express
const app = express(); // returns an object of type, express. By convention call this `app`
//express gives the applicatoin a skeleton, some structure
const logger = require('./logger');
const auth = require('./auth');
const helmet = require('helmet') // this gives us a function
const morgan = require('morgan')


app.use(express.json());
//parses body of the req, if json object, will populate (req.body) prop

app.use(express.urlencoded({extended: true})) //pareses incoming requests with url encoded payloads
//key=value&key=value
// by setting extended to true, can pass arrays and complex objects, using the url encoded format
app.use(express.static('public')) // with this middleware can serve static content, static content server at root of site
app.use(helmet()) // this returns a middleware function

if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
    debug('Morgan enabled')
}

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

//app object has methods: get, post, put, delete
// https://expressjs.com/en/4x/api.html#app for available properties
app.get('/', (req, res) =>{
    res.send('Hello, World!')
    //specify route and callback func, or route handler
});

app.get('/api/courses', (req, res) => {
    res.send(courses)
    //specify route and callback func, or route handler
});

app.get('/api/courses/:id', (req, res)=>{
    //below would return a string, use parseInt()
    const course = courses.find((c) => c.id === parseInt(req.params.id))
    if(!course){
        //by convention, should return a 404 status code
        res.status(404).send(`The course with the given ID was not found`)
    }
    res.send(course)
})

//will post to collection of courses, use the plural name here
app.post('/api/courses', (req, res)=> {
    const { error } = validateCourse(req.body)
    // if RESULT is invalid, return invalid
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)

})

app.put( '/api/courses/:id' ,(req, res)=> {
    const course = courses.find((c) => c.id === parseInt(req.params.id))
    if (!course) {
        //by convention, should return a 404 status code
        res.status(404).send(`The course with the given ID was not found`);
        return;
        //need to exit the function or else the rest is executed
    }

    //const result = validateCourse(req.body) destructuring:
    const { error } = validateCourse(req.body)

    // if RESULT is invalid, return invalid
    if (error) {
        res.status(400).send( error.details[0].message);
        return;
    }

    //UPDATE course
    course.name = req.body.name; 
    //return course to the use
    res.send(course)
})

// host port number is dynamically assigned by the hosting environment. Can't rely on a static number
//PORT
//should attempt to read value of port, if a value, use that
const port = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`listening on port ${port}...`);
    
})

//VALIDATES IF THERE IS A COURSE
function validateCourse(course) {
    //VALIDATE
    const schema = {
        //a string with minimum 3 characters is required
        name: Joi.string().min(3).required()
    }

    //can return result
    return Joi.validate(course, schema) 
}

//#DELETE ROUTE
app.delete('/api/courses/:id', (req, res) =>{
    const course = courses.find((c) => c.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send(`The course with the given ID was not found`);
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
})
