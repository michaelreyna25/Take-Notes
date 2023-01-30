const fs = require('fs');
const express = require('express');
const inquirer = require('inquirer');
const path = require('path');
const util = require('util');
const notes = require('./router/notes');

const app = express();
const PORT = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/notes', notes);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));


app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)

);