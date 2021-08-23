const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { dirname } = require('path');

const route = require('./routes')

const port = 3000;


app.use(express.static(path.join(__dirname,'public')));

app.use(morgan('combined'));

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

app.engine('hbs', handlebars({
    extname:'.hbs'
}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
// console.log(path.join(__dirname, '/resoures/views'));

//Route
route(app);


// app.get('/', (req, res) => {
//   res.render('home');
// })

// app.get('/news', (req, res) => {
//   res.render('news');
// })

// app.get('/search', (req, res) => {

//   res.render('search');
// })

// app.post('/search', (req, res) => {
//   console.log(req.body);
//   res.send('');
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})