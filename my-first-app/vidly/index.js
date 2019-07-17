const Joi = require('@hapi/joi');
const express = require('express');
const genres = require('./routes/genres')
const app = express();

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening on port ${port}...`));