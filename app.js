/*console.log('process.env.INSERT_API_KEY');*/
const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views','views');

app.use(logger('dev'));

/*app.use('/', homeRoute);*/
/*app.use('/navigation', navigationPage);*/

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => console.log('Server is up and running', 3000));

