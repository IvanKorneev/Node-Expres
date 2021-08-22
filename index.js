const express = require('express');
const exphbs = require('express-handlebars');
const homRouts = require('./routes/hom');
const cursesRoutes = require('./routes/courses');
const addRouts = require('./routes/add');
const cardRoutes = require('./routes/card')
const path = require("path");
const mongoose = require('mongoose')


const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname:'hbs'
});

app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
app.set('views','views');



app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use('/',homRouts);
app.use('/courses',cursesRoutes);
app.use('/add',addRouts);
app.use('/card',cardRoutes);

const PORT = process.env.PORT || 3000



async function start() {
    try {
        const url = `mongodb+srv://Ivan:mbQRxKJ0aA3YcRkP@cluster0.v9b44.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

        await mongoose.connect(url, {useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

