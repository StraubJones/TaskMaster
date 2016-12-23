const express = require('express');
const session = require('express-session');
const browserify = require('browserify-middleware');
const bodyParser = require('body-parser');
const http = require('http');


const app = express();
const server = http.Server(app);

//
app.use('/app-bundle.js', browserify('./client/src/index.js', {
  transform: [
    ['babelify', { presets: ['es2015', 'react'] }],
  ],
}));

app.get('/assets/main.css', scssMiddleware({
  file: './client/src/scss/app.scss',
  outputStyle: 'compressed',
}));

app.use(bodyParser.json());

// add some routes

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
