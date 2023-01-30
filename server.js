const fs = require('fs');
const express = require('express');
const inquirer = require('inquirer');
const path = require('path');
const notes = require('./routes/notes.js');

const app = express();
const PORT = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/notes', notes);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));


app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)

);