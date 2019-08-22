const express = require('express');
const app = express.Router();
const db = require('quick.db');
const ensureAuthenticated = require('../ensureAuth.js').ensureAuthenticated;


app.get('/:id', ensureAuthenticated, (req, res) => {
    var appId = req.params.id;
    var username = req.user.username;
    username = username.toLowerCase()

    var application = db.get('users.' + username + '.applications.' + appId)

    if (application == null) {
        res.redirect('/403');
    } else {
        res.render('application', {
            app: application,
            user: req.user
        })
    }
})

app.get('/:id/jobs', ensureAuthenticated, (req, res) => {
    var appId = req.params.id;
    var username = req.user.username;
    username = username.toLowerCase()

    var application = db.get('users.' + username + '.applications.' + appId)
    if (application == null) {
        res.redirect('/403');
    } else {
        res.render('jobs', {
           app: application,
           appid: appId,
           jobs: application.jobs,
           user: req.user 
        })
    }     
})

module.exports = app;