//API routes file which contains all the api method calls

//Include the express and uniqid modules
const router = require('express').Router();
var uniqid = require('uniqid');

//Get the functions from the notes.js implementation
const {
    findByID,
    createNewNote,
    deleteNote
} = require("../../lib/notes");
//Get the existing data from the json file
const { notes } = require("../../db/db.json");

//GET method route which returns the notes currently stored in the json file
router.get("/notes", (req,res) => {
    let results = notes;
    res.json(results);
});

//POST method route which creates a new note from the request body
//An id is created using the uniqid module
router.post ("/notes", (req,res) => {
    req.body.id = uniqid.time();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

//DELETE method route that deletes the note specified by the id parameter
router.delete ("/notes/:id", (req,res) => {
    const note = findByID(req.params.id, notes);
    if (note) {
        results = deleteNote(note, notes);
    }
    res.json(results);
})
module.exports = router;
