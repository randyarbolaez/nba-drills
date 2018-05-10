const express = require('express');
const router = express.Router();
const passport = require("passport");
const User = require('../models/user-model');
const Entry = require('../models/entry-model');
const ensureLogin = require('connect-ensure-login');
// const session = require("express-session");

function ensureAuthenticated(req, res, next) {
  console.log("user? :", req.user)
  if (req.isAuthenticated()) {
    return next();
  } else {

    res.redirect('/signup')
  }
}

router.get('/', ensureAuthenticated, (req, res, next) => {
  Entry.find({ user: req.user._id }, (err, myEntries) => {
    if (err) { return next(err); }
    res.render('entries/entries-index', { Entries: myEntries });
  });

});

router.get('/new', ensureAuthenticated, (req, res, next) => {
  res.render('entries/entries-new')
});

router.post('/create', ensureAuthenticated, (req, res, next) => {
  const newEntry = new Entry({
    drill: req.body.drill,
    date: req.body.date,
    entry: req.body.entry,
    user: req.user._id,
  })
  newEntry.save(err => {
    if (err) { return next(err); }
    else {
      res.redirect('/entries');
    }
  })
});

module.exports = router;