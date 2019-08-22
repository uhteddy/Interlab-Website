module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next()
        } else {
            req.flash('error', 'You must be logged in to view this.');
            res.redirect('/auth/login')
        }       
    },
    ensureNotAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect('/dashboard')
        } else {
            return next()
        }   
    },
    ensureAdmin: (req, res, next) => {
        if (req.user.admin) {
            return next()
        } else {
            res.redirect('/403')
        }
    }
};