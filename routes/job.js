const express = require('express');
const app = express.Router();
const db = require('quick.db');
const ensureAuthenticated = require('../ensureAuth.js').ensureAuthenticated;
const getApplication = require('../getApplication.js').fn;

app.get('/:jobid', ensureAuthenticated, (req, res) => {
    var appId = req.params.id
    var jobId = req.params.jobid

    res.send('got')

    var app = getApplication(req.user.username, appId);
    if (app) {
        if (app.jobs[jobId]) {
            res.render('configurejob', {
                app: app,
                job: db.get(`users.${req.user.username.toLowerCase()}.applications.${appId}.jobs.${jobId}`) 
            })
        } else {
            req.flash('error', `We couldn't find that Job.`);
            res.redirect(`/dashboard/application/${jobId}/jobs`)
        } 
    } else {
        req.flash('error', `We couldn't find that Job.`);
        res.redirect(`/dashboard/application/${jobId}/jobs`)
    }
})

module.exports = app;