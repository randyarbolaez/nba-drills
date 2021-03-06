const express = require('express');
const router = express.Router();
const Drill = require('../models/drill-model');

// GET DASHBOARD(HOMEPAGE)
router.get('/', (req, res, next) => {
  Drill.find()
    .then(drills => {
      res.render('drill/drill-index', { list: drills });
    })
    .catch(error => {
      console.log(error);
    });
});

// GET ALL DRILLS
router.get('/:drills', (req, res, next) => {
  Drill.findById(req.params.drills)
    .then(response => {
      console.log(response);
      res.render('drill/drill-details', { list: response });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

module.exports = router;
