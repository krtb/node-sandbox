const Joi = require('joi')
// what is returend from the above module is a class, use Pascal Naming Convention to name our classes
const express = require('express'); //returns a function, that we will call express
const app = express(); // returns an object of type, express. By convention call this `app`
//express gives the applicatoin a skeleton, some structure

app.use(express.json());
//adding a pirce of middleware. Function returned and assigned to app

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
    const schema = {
        name: Joi.string().min(3).required() 
    }

    //objecvt that is returned to be STORED in an constant
    const result = Joi.validate(req.body, schema)
    

    if(result.error) {
        //never trust input client sends, always validate 
        //Joi makes the json reply seen by client very clear and easy to read
        res.status(400).send(result.error.details[0].message);
        return;
    }
        const course = {
            id: courses.length + 1,
            name: req.body.name
        }
        courses.push(course)
        res.send(course)

})

app.put((req, res)=> {
    
})

// host port number is dynamically assigned by the hosting environment. Can't rely on a static number
//PORT
//should attempt to read value of port, if a value, use that
const port = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`listening on port ${port}...`);
    
})
