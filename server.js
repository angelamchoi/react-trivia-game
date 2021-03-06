const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

// load env variables
require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
if(process.env.NODE_ENV === 'production') {
    app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
    app.use(express.static(path.join(__dirname, 'build')));
}

// API routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/quiz', require('./routes/api/quiz'));
app.use('/api/mytrivias', require('./routes/api/quiz'));
app.use(require('./config/auth'));

// React App entry point (Production only)
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});