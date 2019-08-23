const express = require('express');
const app = express.Router();
const db = require('quick.db');
const ensureAuthenticated = require('../ensureAuth.js').ensureAuthenticated;
const getApplication = require('../getApplication.js').fn;


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
            user: req.user,
            req: req
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

// Job

app.get('/:id/job/:jobid', ensureAuthenticated, (req, res) => {
    var appId = req.params.id
    var jobId = req.params.jobid

    var job = getApplication(req.user.username, appId);
    if (job) {

    } else {
        req.flash('error', `We couldn't find that Job.`);
        res.redirect(`/dashboard/application/${jobId}/jobs`)
    }
})

module.exports = app;