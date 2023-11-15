const express = require('express');
const user_Route = express();

user_Route.set('view engine', 'ejs');
user_Route.set('views', './views/user');
const userAuth = require('../middleware/userAuth');
const nocache = require('nocache');

// Parse URL-encoded bodies
user_Route.use(express.urlencoded({ extended: true }));
user_Route.use(express.json());
user_Route.use(nocache())

user_Route.get('/', userAuth.isLogout, (req, res) => {
    try {
        res.render('login', { message: "" })
    } catch (error) {
        console.log(error);
    }
});
user_Route.post('/', (req, res) => {
    try {
        let email = "ajmalaj8085@gmail.com";
        let password = "12345";
        console.log(req.body);
        if (email === req.body.email && password === req.body.password) {
            req.session.user = "Ajmal";
            req.session.user1 = true;
            res.render('home', { user: req.session.user });
        } else {
            res.render('login', { message: "Invalid email or password" });
        }
    } catch (error) {
        console.log(error);
    }
});





user_Route.get('/signOut', userAuth.isLogin, (req, res) => {
    req.session.destroy();
    res.render('login', { message: "" })
});

module.exports = user_Route