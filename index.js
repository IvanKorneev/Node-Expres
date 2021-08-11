const express = require('express');
const exphbs = require('express-handlebars');
const homRouts = require('./routes/hom');
const cursesRoutes = require('./routes/courses');
const addRouts = require('./routes/add');
const cardRoutes = require('./routes/card')


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
app.use('/courses',cursesRoutes);
app.use('/add',addRouts);
app.use('/card',cardRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server Start ${PORT}`)
});
