
const router = require('express').Router();
const ("express").Router();


  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  //return notes
  return res.json(notes);
});


module.exports = router;
