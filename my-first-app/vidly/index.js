const Joi = require('joi');
const express = require('express');
const app = express()

app.use(express.json())

const genres = [
    {id: 1, name: "Horror"},
    {id: 2, name: "Comedy"},
    {id: 3, name: "Action"},
]