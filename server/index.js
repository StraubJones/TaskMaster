const express = require('express');
const session = require('express-session');
const browserify = require('browserify-middleware');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const app = express();
const server = http.Server(app);


app.use('/app-bundle.js', browserify('./client/index.js', {
  transform: [
    ['babelify', { presets: ['es2015', 'react'] }],
  ],
}));

// app.get('/assets/main.css', scssMiddleware({
//   file: './client/scss/app.scss',
//   outputStyle: 'compressed',
// }));

app.use(bodyParser.json());

// TODO: add some more routes


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
