const express = require('express'); 
// const app = experss(); this approach doesn't work when seperating routes in seperate module
const router = express.Router()

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

//route in index, can now change here to only a slash
router.get('/', (req, res) => {
    res.send(courses)
    //specify route and callback func, or route handler
});

//will post to collection of courses, use the plural name here
router.post('/', (req, res) => {
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

// have a parameter so will use it
router.put('/:id', (req, res) => {
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
        res.status(400).send(error.details[0].message);
        return;
    }

    //UPDATE course
    course.name = req.body.name;
    //return course to the use
    res.send(course)
})


//#DELETE ROUTE
router.delete('/:id', (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send(`The course with the given ID was not found`);
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
})

//GET a specific route
router.get('/api/courses/:id', (req, res) => {
    //below would return a string, use parseInt()
    const course = courses.find((c) => c.id === parseInt(req.params.id))
    if (!course) {
        //by convention, should return a 404 status code
        res.status(404).send(`The course with the given ID was not found`)
    }
    res.send(course)
})

module.exports = router;