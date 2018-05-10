const express = require('express');
const router = express.Router();

const User = require("../models/user-model");

const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const session = require("express-session");
const flash = require('connect-flash')

router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === '' || password === '') {
    res.render('auth/signup')
    return;
  }
  User.findOne({ username: username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup")
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = User({
      username: username,
      password: hashPass,
    })

    newUser.save(err => {
      if (err) {
        res.render('auth/signup')
      } else {
        res.redirect('/login');
      }
    })
  });
});

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/entries",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: false
  }
));

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
};

// router.get('/entries', (req, res) => {
//   res.render('entries/entries-index', { user: req.user });
// });

// router.get('/entries', (req, res, next) => {
//   res.render('entries/entries-index', { user: req.user });
// });

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});



module.exports = router;
