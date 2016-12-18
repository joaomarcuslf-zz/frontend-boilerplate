const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.set('view engine', 'pug');
app.set('views', './app/views');

app.use(express.static('./assets'));
app.use(express.static('./build'));
app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());


consign({
    logger: console,
    verbose: true,
    extensions: [ '.js', '.json' ],
    loggingType: 'info'
  })
	.include('app/routes')
	.then('app/models')
  .then('app/controllers')
	.into(app);

app.use((request, response) => response.status(404).render('404'));

module.exports = app;
