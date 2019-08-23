const express = require('express');
const app = express.Router();
const db = require('quick.db');
const ensureAuthenticated = require('../ensureAuth.js').ensureAuthenticated;

app.get('/:jobid', ensureAuthenticated, (req, res) => {
    var appId = req.params.id
    var jobId = req.params.jobid

    var job = db.get('')
})

module.exports = app;