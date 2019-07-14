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

//middleware(JOI), used for data validation
function validateGenre(genre) {
    const schema = {name: Joi.string().min(3).required()}
    return Joi.validate(genre, schema)
}

// root of app, check if functioning
app.get('/', (req, res) => {
    res.send('Hello, World!')
    //specify route and callback func, or route handler
});

//GET all genres: don't need id or other data
app.get('/api/genres', (req,res) => {
    res.send(genres)
})

//GET a single genre: find by id
app.get('/api/genres/:id', (req, res) => {
    // console.log(req.params); === { id: 1}       
    const genre = genres.find((g)=> g.id === parseInt(req.params.id) );
    if(!genre) res.status(404).send('That genre ID could not be found.');
    res.send(genre);
})

//CREATE/POST a new genre: no id, only what you're creating
app.post('/api/genres/', (req, res) => {
    //by default this would be `undefined`, unless using body parsing middleware    
    const { error } = validateGenre(req.body);    

    if(error) {        
        res.status(404).send(error.details[0].message);
        return;
    }

    //create a genre object to pushh to our array. With (req.body.name)
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }
    
    genres.push(genre)
    res.send(genres)
})

//UPDATE/PUT a post genre: need the id and the info you're changing
// EXPRESS, (req.params): contains the properties of the objext we gave it
app.put('/api/genres/:id', (req,res)=>{
    const genre = genres.find((g)=> g.id === parseInt(req.params.id) );
    const { error } = validateGenre(req.body)
    //IF GENRE DOESN'T EXIST
    if (!genre) return res.status(404).send("That genre ID could not be found.");
    //IF REQUEST IS INVALID
    if (error) return res.status(404).send(error.details[0].message);
    //UPDATE/EDIT THE GENRE NAME
    genre.name = req.body.name
    //send back to user, singular & updated genre
    res.send(genre)
});

//DELETE
app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find((g) => g.id === parseInt(req.params.id));
    //VALIDATE that that genre exists
    if (!genre) return res.state(404).send("That genre ID could not be found.");
    //FIND OBJECT IN ARRAY THAT MATCHES GENRE ID
    const index = genres.indexOf(genre)
    //REMOVE OBJECT FROM ARRAY
    genres.splice(index, 1)
    res.send(genres)
})