// User Authentication Middleware
function isLogin(req, res, next) {
    try {
        if (req.session.user) {
            // User is authenticated, continue with the request
            next();
        } else {
            // User is not authenticated, redirect to login page
            res.redirect('/');
        }
    } catch (error) {
        console.log(error.message);
    }
}

function isLogout(req, res, next) {
    try {
        if (req.session.user) {
            res.redirect('/');
        } else {

            next();
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    isLogin,
    isLogout
};
