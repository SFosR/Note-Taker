const express = require('express');
const res = require('express/lib/response');
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../db/directions.js')

// GET route to notes.html
router.get("/notes", (req, res) => {
    readFromFile().then((data) =>
        res.json(JSON.parse(data)));
});

// GET route to a specific note 
router.get("/notes/:id", (req, res) => { 
    const noteId = req.params.note_id;
    readFromFile('./db/notes.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => notes.id === id);
            return result.length > 0
            ? res.json(result)
            : res.json.apply("No note with that ID");
        });
});

// Delete note - not working
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/notes.json')
      .then((data) => JSON.parse(data))
      .then((json) => {

        const result = json.filter((newNote) => notes.Id !== Id);
  
       
        writeToFile('./db/notes.json', result);
  
       
        res.json({ok: true});
      });
  });
  
  // Display
  router.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text} = req.body;
  
    if (req.body) {
      const newNote = {
        title: title,
        text: text,
        id: uuidv4(),
      };
  
      readAndAppend(newNote);
      res.json(`Note added`);
    } else {
      res.error('Error');
    }
  });
  
  module.exports = router;
  


