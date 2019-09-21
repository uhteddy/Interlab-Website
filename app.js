const express = require('express');
var bodyParser = require('body-parser');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash'); 
const passport = require('passport');
const db = require('quick.db');
const rateLimit = require("express-rate-limit");
const path = require('path')
const expAutoSan = require('express-autosanitizer');
const localtunnel = require('localtunnel');

// Discord Bot Initialization
require('./bot/index').init();

(async () => {
  const tunnel = await localtunnel({ port: 3000, subdomain: 'interlab' });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const app = express();

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(cookieParser());
app.use(flash())
app.use(expAutoSan.all);
app.use(session({
    secret: "cat dog hate me",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const ensureNotAuthenticate = require('./ensureAuth.js').ensureNotAuthenticated;

// EJS View Engine
app.set('view engine', 'ejs');

app.get('/', ensureNotAuthenticate, (req, res) => {
    res.render('index', {
        stats: db.get('stats')
    })
})

app.get('/403', (req, res) => {
    res.render('forbidden');
})

app.get('/tos', (req, res) => {
    res.render('tos')
})

app.use('/auth', require('./routes/userAuth.js'), rateLimit);
app.use('/dashboard', require('./routes/dashboard.js'));
app.use('/api', require('./routes/api.js'), rateLimit);
app.use('/dashboard/application', require('./routes/application.js'));
app.use('/download', require('./routes/download.js'));


app.listen(3000);