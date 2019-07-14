const Joi = require('@hapi/joi');
const express = require('express');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`listening on port ${port}...`);
})


const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Romance' },
];

app.get('/', (req, res) => {
    res.send('Hello, World!')
    //specify route and callback func, or route handler
});

//GET all genres
app.get('/api/genres', (req,res) => {
    res.send(genres)
})

//GET a single genre
app.get('/api/genres/:id', (req, res) => {
    // console.log(req.params); === { id: 1}   
    const genre = genres.find((g)=> g.id === parseInt(req.params.id) )
    if(!genre) res.status(404).send('That genre ID could not be found.')
    res.send(genre)
})

//CREATE/POST a new genre