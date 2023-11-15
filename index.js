const express = require('express');
const app = express();
const session = require('express-session')

app.set('view engine', 'ejs');
app.set('views', './');


const nocache = require('nocache');
app.use(function (req, res, next) {
  if (!req.user)
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

app.use(
  session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

const userRouter = require('./route/userRoute');
app.use('/', userRouter);


const adminRouter = require('./route/adminRoute');
app.use('/admin', adminRouter)



app.all('*', (req, res) => {
  res.render('error');
});

app.listen(5555, () => {
  console.log('Connected successfully');
});
