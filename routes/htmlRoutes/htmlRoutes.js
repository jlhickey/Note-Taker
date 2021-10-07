const path = require('path');
const router = require('express').Router();
const ("express").Router();
const {V4: uniqidv4} =
require ("uniqid");
const fs = require ("fs");


//GET method route that will return notes.html when the path is "/notes"
router.get("/notes", (req, res) => {
  //creates variable from db.json file
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  //return notes
  return res.json(notes);
});


module.exports = router;
