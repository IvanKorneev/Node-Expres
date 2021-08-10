const express = require('express');
const exphbs = require('express-handlebars');
const homRouts = require('./routes/hom');
const cursesRouts = require('./routes/courses');
const addRouts = require('./routes/add');


const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname:'hbs'
});

app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
app.set('views','views');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use('/',homRouts);
app.use('/courses',cursesRouts);
app.use('/add',addRouts);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server Start ${PORT}`)
});
