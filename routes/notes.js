const router = require('express').Router();
const {readAndAppend, readFromFile} = require('../helpers/fsUtils');


router.get('/', (req, res) => {
    console.log(`${req.protocol}added to notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/', (req, res) => {
    console.log(`${req.protocol}added to notes`);
    
    const { title, text } = req.body;
    console.log(req.body);


    if (title && text) {
        const newNote = { title, text };
        readAndAppend(newNote, './db/db.json');
        const response = JSON.stringify(newNote);
        res.json(response);
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;