const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { dirname } = require('path');
const methodOverride = require('method-override');

const route = require('./routes')
const db = require('./config/db')

// connect to db
db.connect();

const port = 3000;


app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));

app.use(morgan('combined'));

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

app.engine('hbs', handlebars({
    extname:'.hbs', 
    helpers:{
      sum:(a,b) => a+b,
    }
}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
// console.log(path.join(__dirname, '/resoures/views'));

//Route
route(app);



app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})