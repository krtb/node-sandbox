const express = require('express'); //returns a function, that we will call express
const app = express(); // returns an object of type, express. By convention call this `app`
//express gives the applicatoin a skeleton, some structure

//app object has methods: get, post, put, delete
// https://expressjs.com/en/4x/api.html#app for available properties
app.get('/', (req, res) =>{
    res.send('Hello, World!')
    //specify route and callback func, or route handler
});

app.get('/api/courses', (req, res) => {
    res.send('Hello, courses!')
    //specify route and callback func, or route handler
});

app.listen(3000, ()=>{
    console.log('on port 3000...');
    
})
