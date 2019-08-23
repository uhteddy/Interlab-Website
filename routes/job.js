const express = require('express');
const app = express.Router();
const db = require('quick.db');
const ensureAuthenticated = require('../ensureAuth.js').ensureAuthenticated;
const getApplication = require('../getApplication.js').fn;

app.get('/:jobid', ensureAuthenticated, (req, res) => {
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