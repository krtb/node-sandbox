const express = require('express');
const router = express.Route();

const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Romance' },
];

//GET all genres: don't need id or other data
router.get('/', (req, res) => {
    res.send(genres)
})

//GET a single genre: find by id
router.get('/:id', (req, res) => {
    // console.log(req.params); === { id: 1}       
    const genre = genres.find((g) => g.id === parseInt(req.params.id));
    if (!genre) res.status(404).send('That genre ID could not be found.');
    res.send(genre);
})

//CREATE/POST a new genre: no id, only what you're creating
router.post('/', (req, res) => {
    //by default this would be `undefined`, unless using body parsing middleware    
    const { error } = validateGenre(req.body);
    if (error) return res.status(404).send(error.details[0].message);
    //create a genre object to pushh to our array. With (req.body.name)
    const genre = { d: genres.length + 1, ame: req.body.name }
    genres.push(genre)
    res.send(genres)
})

//UPDATE/PUT a post genre: need the id and the info you're changing
// EXPRESS, (req.params): contains the properties of the objext we gave it
router.put('/:id', (req, res) => {
    const genre = genres.find((g) => g.id === parseInt(req.params.id));
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
router.delete('/:id', (req, res) => {
    const genre = genres.find((g) => g.id === parseInt(req.params.id));
    //VALIDATE that that genre exists
    if (!genre) return res.status(404).send("That genre ID could not be found.");
    //FIND OBJECT IN ARRAY THAT MATCHES GENRE ID
    const index = genres.indexOf(genre)
    //REMOVE OBJECT FROM ARRAY
    genres.splice(index, 1)
    res.send(genres)
})

module.exports = router