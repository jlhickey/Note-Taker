// Dependencies
// =============================================================
const path = require('path');
const router = require('express').Router();

// HTML Routes
// =============================================================

router.get('/notes', (req, res) => {
  res.sendfile(path.join(__dirname, '../../public/assets/notes.html'));
});

router.get('*', (req, res) => {
  res.sendfile(path.join(__dirname, '../../public/assets/index.html'));
});

module.exports = router;
