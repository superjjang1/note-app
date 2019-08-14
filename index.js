const express = require('express');
const notes = require('./models/notes');
const app = express();
const port = 3000;

app.get('/notes', (req, res)=>{
    console.log("what're your notes");
    const allNotes = notes.getAll();
    allNotes
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});
app.listen(port);