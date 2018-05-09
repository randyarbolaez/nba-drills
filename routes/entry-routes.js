const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('entries/entries-index');
});


module.exports = router;