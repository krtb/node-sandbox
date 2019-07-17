const Joi = require('@hapi/joi');
const express = require('express');
const genres = require('./routes/genres')

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening on port ${port}...`));

const app = express();
app.use(express.json());
app.use('/api/genres', genres);


//middleware(JOI), used for data validation
function validateGenre(genre) {
    const schema = {name: Joi.string().min(3).required()}
    return Joi.validate(genre, schema)
}

// root of app, check if functioning
app.get('/', (req, res) => {
    res.send('Hello, World!')
});