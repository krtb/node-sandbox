const debug = require('debug')('app:startup') 
const config = require('config');
const Joi = require('joi')
// what is returend from the above module is a class, use Pascal Naming Convention to name our classes
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express'); //returns a function, that we will call express
const app = express(); // returns an object of type, express. By convention call this `app`
//express gives the applicatoin a skeleton, some structure
const logger = require('./middleware/logger');
const auth = require('./auth');
const helmet = require('helmet') // this gives us a function
const morgan = require('morgan')

//need to set the view engine for the application
app.set('view engine', 'pug') // express will load this module, don't have to require it
app.set('views', './views') // only if you want to overide path to templates. Default value, don't have to set this

app.use(express.json());
//parses body of the req, if json object, will populate (req.body) prop

app.use(express.urlencoded({extended: true})) //pareses incoming requests with url encoded payloads
//key=value&key=value
// by setting extended to true, can pass arrays and complex objects, using the url encoded format
app.use(express.static('public')) // with this middleware can serve static content, static content server at root of site
app.use(helmet()) // this returns a middleware function
app.use('api/course', courses) // any request coming in for this route should be handled by this router
app.use('/', home);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
    debug('Morgan enabled')
}

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

// host port number is dynamically assigned by the hosting environment. Can't rely on a static number
//PORT
//should attempt to read value of port, if a value, use that
const port = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`listening on port ${port}...`);
})
