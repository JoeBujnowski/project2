/*console.log('process.env.INSERT_API_KEY');*/

const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

const landingRoute = require('./routes/landing');
const mainRoute = require('./routes/main');

app.set('view engine', 'ejs');
app.set('views','views');

app.use(logger('dev'));

app.use('/', landingRoute);
app.use('/main', mainRoute);


// page 1
app.get('/', (req, res) => {
  res.render('index');
});


// page 2
app.get('/main', (req, res) => {
  res.render('main');
});





// keep at bottem of page
app.listen(port, () => console.log('Server is up and running', 3000));

