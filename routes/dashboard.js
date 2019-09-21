const express = require('express');
const app = express.Router();
const db = require('quick.db');

const ensureAuthenticated = require('../ensureAuth.js').ensureAuthenticated;
const ensureAdmin = require('../ensureAuth.js').ensureAdmin;
const sendMessage = require('../bot/functions/sendMessage').fn;

app.get('/', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        user: req.user
    })
})

app.get('/admin', [ensureAuthenticated, ensureAdmin], (req, res) => {
    res.render('admin', {
        user: req.user,
        users: db.get('users')
    })
});

app.get('/admin/:username', [ensureAuthenticated ,ensureAdmin], (req, res) => {
    if (req.user.admin) {
        var username = req.params.username
        var user = db.get('users.' + username.toLowerCase())
        if (user) {
            res.render('edituser', {
                user: user,
                admin: req.user
            })
        } else {
            req.flash('error', "User doesn't exist.");
            res.redirect('/dashboard/admin')
        }
    } else {
        res.render('forbidden')
    }
})

app.get('/shared', ensureAuthenticated, (req, res) => {
    res.render('shared', {
        user: req.user
    })
})

// admin

app.post('/admin/:username/edit', [ensureAdmin, ensureAuthenticated], (req, res) => {
    var lowerUsername = req.params.username.toLowerCase()
    var dbPath = `users.${lowerUsername}`

    var isAdmin = req.body.admin

    var maxcenters = req.body.maxcenters
    var maxjobs = req.body.maxjobs
    var maxquestions = req.body.maxquestions

    var user = db.get(`${dbPath}`)
    if (db.get(`${dbPath}`)) {
        db.set(`${dbPath}.maxCenters`, parseInt(maxcenters, 10));
        db.set(`${dbPath}.maxJobs`, parseInt(maxjobs, 10));
        db.set(`${dbPath}.maxQuestions`, parseInt(maxquestions, 10));
        if (req.user.username.toLowerCase() == "uhteddy" && lowerUsername !== "uhteddy") {
            if (isAdmin == 'on') {
                db.set(`${dbPath}.admin`, true);
            } else {
                db.set(`${dbPath}.admin`, false);
            }
        }
        req.flash('success', 'Successfully saved!');
        res.redirect('/dashboard/admin')
    } else {
        req.flash('error', 'User not found');
        res.redirect('/dashboard/admin');
    }
});

app.post('/admin/:username/delete', [ensureAdmin, ensureAuthenticated], (req, res) => {
    var lowerUsername = req.params.username.toLowerCase()
    var dbPath = `users.${lowerUsername}`
    
    var user = db.get(dbPath);

    if(req.user.username == "uhteddy" || !user.admin) {
        db.delete(dbPath);
        sendMessage("623307103532220426", "#ff0000", "User Deleted", "Website Administrator **" + req.user.username + "** has Terminated **" + req.params.username + "**.");``
        req.flash('success', 'Successfully terminated ' + req.params.username)
        res.redirect('/dashboard/admin')
    }
});

module.exports = app;