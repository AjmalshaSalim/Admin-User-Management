const express = require('express');
const admin_Route = express();


admin_Route.set('view engine', 'ejs');
admin_Route.set('views', './views/admin');

admin_Route.get('/login', (req, res) => {
    res.render('adminLogin')
})


module.exports = admin_Route