const express = require('express');
const res = require('express/lib/response');
const router = require("express").Router();
const { v4: uuidv4 } 
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require("uuid");

// GET route to notes.html
router.get("/notes", (req, res) => {
    readFromFile("./db/notes.json").then((data) =>
        res.json(JSON.parse(data)));
});

// GET route to a specific note 
router.get("/:note_id", (req, res) => { 
    const noteId = req.params.note_id;
    readFromFile('./db/notes.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_id === noteId);
            return result.length > 0
            ? res.json(result)
            : res.json.apply("No note with that ID");
        });
});

// Delete note
notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/notes.json')
      .then((data) => JSON.parse(data))
      .then((json) => {

        const result = json.filter((note) => note.note_id !== tipId);
  
       
        writeToFile('./db/notes.json', result);
  
       
        res.json(`Item ${noteId} has been deleted`);
      });
  });
  
  // Display
  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { username, note } = req.body;
  
    if (req.body) {
      const newNote = {
        username,
        note,
        note_id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/notes.json');
      res.json(`Note added`);
    } else {
      res.error('Error');
    }
  });
  
  module.exports = router;
  


