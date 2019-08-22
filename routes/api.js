const express = require('express');
const app = express.Router();
const db = require('quick.db');
const short = require('short-uuid');
const uuidAPIKey = require('uuid-apikey');

const ensureAuthenticated = require('../ensureAuth').ensureAuthenticated;


/*
db.delete('users.uhteddy.applications')
db.set('users.uhteddy.applications', {})
db.set('stats.applications', 0)
*/

// Application API

app.post('/create', [ensureAuthenticated, recaptcha.middleware.verify], (req, res) => {
    if (!req.recaptcha.error) {
        var api = uuidAPIKey.create();
        if (Object.keys(req.user.applications).length < req.user.maxCenters) {
            var appId = short.generate();
            var name = req.body.name || ""
            var desc = req.body.desc || ""
            db.set(`users.${req.user.username.toLowerCase()}.applications.${appId}`, {
                name: name,
                desc: desc,
                id: appId,
                apikey: api.apiKey,
                colors: {
                    bgcolor: "#1d1d1d",
                    bottomcolor: "#151515",
                    topbarcolor: "#242424",
                    textboxcolor: "#2d2d2d",
                    textcolor: "#ffffff"
                },
                jobs: {},
                responses: {}
            })
            db.add('stats.applications', 1)
            req.flash('success', 'Successfully created application!');
            res.redirect('/dashboard');
        } else {
            req.flash('error', 'You have maxed out your applications.');
            res.redirect('/dashboard')
        }
    } else {
        req.flash('error', 'Please fill out the captcha');
        res.redirect('/dashboard')
    }
});

app.post('/delete/:id', ensureAuthenticated, (req, res) => {
    var appId = req.params.id;

    var app = db.get(`users.${req.user.username.toLowerCase()}.applications.${appId}`);
    if (app) {
        db.delete(`users.${req.user.username.toLowerCase()}.applications.${appId}`);
        db.subtract('stats.applications', 1)
    }

    req.flash('success', 'Successfully deleted application!');
    res.redirect('/dashboard');
})

app.post('/save', ensureAuthenticated, (req, res) => {

    var name = req.body.name || "";
    var desc = req.body.desc || "";

    var bgcolor = req.body.bgcolor || "#1d1d1d";
    var bottomcolor = req.body.bottomcolor || "#151515";
    var topbarcolor = req.body.topbarcolor || "#242424";
    var textboxcolor = req.body.textboxcolor || "#2d2d2d";
    var textcolor = req.body.textcolor || "#ffffff";

    var appId =  req.body.appId;
    var app = db.get(`users.${req.user.username.toLowerCase()}.applications.${appId}`);

    var app = db.get(`users.${req.user.username.toLowerCase()}.applications.${appId}`);

    var newSave = {
        name: name,
        desc: desc,
        id: app.id,
        apikey: app.apiKey,
        colors: {
            bgcolor: bgcolor,
            bottomcolor: bottomcolor,
            topbarcolor: topbarcolor,
            textboxcolor: textboxcolor,
            textcolor: textcolor
        },
        jobs: app.jobs,
        responses: app.responses     
    }

    if (app == newSave) {
        req.flash('error', 'There were no changes to save');
        res.redirect('/dashboard/application/' + appId);
    } else {
        db.set(`users.${req.user.username.toLowerCase()}.applications.${appId}`, {
            name: name,
            desc: desc,
            id: app.id,
            apikey: app.apiKey,
            colors: {
                bgcolor: bgcolor,
                bottomcolor: bottomcolor,
                topbarcolor: topbarcolor,
                textboxcolor: textboxcolor,
                textcolor: textcolor
            },
            jobs: app.jobs,
            responses: app.responses     
        });    
    
        req.flash('success', 'Saved Successfully!');
        res.redirect('/dashboard/application/' + appId);
    };
});




// Job API
app.post('/delete/job/:appid/:id', [ensureAuthenticated, recaptcha.middleware.verify], (req, res) => {
    var appid = req.params.appid;
    var id = req.params.id;

    var jobs = db.get(`users.${req.user.username.toLowerCase()}.applications.${appid}.jobs.${id}`)

    if (jobs) {
        try {
            db.delete(`users.${req.user.username.toLowerCase()}.applications.${appid}.jobs.${id}`);

            req.flash('success', 'Successfully deleted');
            res.redirect('/dashboard/application/' + appid + '/jobs');
        } catch {
            req.flash('error', 'An error occured while trying to add the job.');
            res.redirect('/dashboard/application/' + appid + '/jobs');
        }
    } else {
        req.flash('error', 'An error occured while trying to add the job.');
        res.redirect('/dashboard/application/' + appid + '/jobs')     
    }
})

app.post('/create/job/:id', ensureAuthenticated, (req, res) => {
    var name = req.body.name || ""
    var desc = req.body.desc || ""

    var appid = req.params.id

    var application = db.get(`users.${req.user.username.toLowerCase()}.applications.${appid}`)

    if (application) {
        if (Object.keys(db.get(`users.${req.user.username.toLowerCase()}.applications.${appid}.jobs`)) < req.user.maxJobs) {
            var jobid = short.generate();
            db.set(`users.${req.user.username.toLowerCase()}.applications.${appid}.jobs.${jobid}`, {
                name: name,
                desc: desc,
                id: jobid,
                questions: {}
            });
            req.flash('success', 'Successfully created job!');
            res.redirect('/dashboard/application/' + appid + '/jobs');
        } else {
            req.flash('error', 'You reached your max on jobs.');
            res.redirect('/dashboard/application/' + appid + '/jobs')
        }
    } else {
        req.flash('error', 'An error occured while trying to add the job.');
        res.redirect('/dashboard/application/' + appid + '/jobs')
    }
});


// 3rd party API
app.get('/getinfo/:userid/:applicationid/:apikey', (req, res) => {
    var userid = req.param.userid
    var applicationid = req.param.applicationid
    var apikey = req.param.apikey
    var Users = db.get('users')

    Object.keys(Users).forEach(element => {
        if (Users[element].id == userid) {
            var application = Users[element].applications.applicationid
            if (application) {
                if (application.apikey == apikey) {
                    application = application.slice(4);
                    res.json({"success": true, "message": application``})
                } else {
                    res.json({"success": false, "message": "Access Denied"})  
                }
            } else {
                res.json({"success": false, "message": "Application not found."})
            }
        }
    });
})

module.exports = app;