const express = require('express');
const todoController = require('./controllers/todoController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./'));

todoController(app);

app.listen(3000);
console.log('listening on port 3000');
