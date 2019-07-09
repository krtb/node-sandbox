const express = require('express'); //returns a function, that we will call express
const app = express(); // returns an object of type, express. By convention call this `app`
//express gives the applicatoin a skeleton, some structure

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

// host port number is dynamically assigned by the hosting environment. Can't rely on a static number
//PORT
//should attempt to read value of port, if a value, use that
const port = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`listening on port ${port}...`);
    
})
