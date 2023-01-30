const fs = require('fs');
const express = require('express');
const inquirer = require('inquirer');
const path = require('path');
const util = require('util');

const app = express();
const PORT = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)

);