const express = require('express');
const app = express.Router();
const Recaptcha = require('express-recaptcha').RecaptchaV2;
const bcrypt = require('bcrypt');
const db = require('quick.db');
const passport = require('passport');

const ensureNotAuthenticated = require('../ensureAuth.js').ensureNotAuthenticated;

const initializePassport = require('../passport-config.js');
initializePassport(passport, 
    username => db.get('users.' + username.toLowerCase()),
    id => {
        const users = db.get('users')
        for (var key in users) {
            var user = users[key];

            if (user["id"] == id) {
                return user
            }
        }
    }
);

global.recaptcha = new Recaptcha('6Ld4hbIUAAAAAHuV6Ct0katfyY2KO5IHNyU0d2Vq', '6Ld4hbIUAAAAAOzgBHoRtfKFIMfnKwc3-6UJTbdz');

app.get('/signup', ensureNotAuthenticated, (req, res) => {
    res.render('signup')
})

app.get('/login', ensureNotAuthenticated, function(req, res){
    res.render('login');
});

app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/auth/login')
})

app.post('/login', [recaptcha.middleware.verify, passport.authenticate('local', {failureRedirect: '/auth/login', failureFlash: true })], function(req, res) {
    if (!req.recaptcha.error) {
        res.redirect('/dashboard');
    } else {
        req.logOut()
        req.flash('error', 'Fill out captcha.');
        res.redirect('/auth/login')
    }
})

function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
};

app.post('/signup', recaptcha.middleware.verify, async (req, res) => {
    const username = req.body.username || null
    const pass1 = req.body.password || null
    const pass2 = req.body.password2 || null


    if (!req.recaptcha.error) {
        if (!username || !pass1 || !pass2) {
            req.flash('error', 'Please fill out all fields');
            res.redirect('/auth/signup')
        } else {
            if (pass1 !== pass2) {
                req.flash('error', "Passwords don't match.");
                res.redirect('/auth/signup')
            } else {
                if (!hasWhiteSpace(username)) {
                    if(!username.length > 20) {
                        if (!db.get('users.' + username.toLowerCase())) {
                            try {
                                var hashedPassword = await bcrypt.hash(pass1, 10)
                                db.set('users.' + username.toLowerCase(), {
                                    id: Date.now().toString(),
                                    username: username,
                                    verified: false,
                                    password: hashedPassword,
                                    beta: true,
                                    admin: false,
                                    maxCenters: 5,
                                    maxJobs: 10,
                                    applications: {},
                                })
                                db.add('stats.users', 1)
                                req.flash('success', 'Account created!');
                                res.redirect('/auth/login')
                            } catch {
                                req.flash('error', 'Error occured while signing up.');
                                res.redirect('/auth/signup')
                            }
                        } else {
                            req.flash('error', 'Username already exists.');
                            res.redirect('/auth/signup')
                        }
                    } else {
                        req.flash('error', 'Username cannot be above 20 characters')
                        res.redirect('/auth/signup')
                    }
                } else {
                    req.flash('error', 'Username contains white spaces.')
                    res.redirect('/auth/signup')
                }
            }
        }
    } else {
        req.flash('error', 'Fill out captcha');
        res.redirect('/auth/signup')
    }
})

module.exports = app;