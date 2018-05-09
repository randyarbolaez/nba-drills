const express = require('express');
const router = express.Router();
const User = require('../models/user-model');
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const flash = require("connect-flash");

// BCrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const team = req.body.team;
  if (username === '' || password === '') {
    res.render('auth/signup', {
      message: 'Indicate a username and a password to sign up',
    })
    return;
  }
  User.findOne({ username: username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "Sorry, that username already exists" })
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = User({
      username: username,
      password: hashPass,
    })

    newUser.save(err => {
      res.redirect('/');
    })
  });
});

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash('error') });
});

router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  }
));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});


module.exports = router;
