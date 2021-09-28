const express =require("express");
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');


const app = express();
app.use('/', express.static(path.join(__dirname, 'views')));

app.use(cors({ exposedHeaders: "*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/people', index);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
  //res.send(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


module.exports = app;