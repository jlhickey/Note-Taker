const path = require('path');
const router = require('express').Router();

//GET method route that will return notes.html when the path is "/notes"
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//GET method route that goes to index.html when any other path is called
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
