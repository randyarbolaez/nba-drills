const express = require('express');
const router = express.Router();

const User = require("../models/user-model");

const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const session = require("express-session");
const flash = require('connect-flash')

router.get('/signup-login', (req, res, next) => {
  res.render('auth/signup-login');
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === '' || password === '') {
    res.render('auth/signup-login')
    return;
  }
  User.findOne({ username: username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup-login")
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
        res.render('auth/signup-login')
      } else {
        res.redirect('/');
      }
    })
  });
});

router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/entries",
    failureRedirect: "/signup-login",
    failureFlash: true,
    passReqToCallback: false
  }
));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});



module.exports = router;
