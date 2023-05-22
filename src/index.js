const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

const port = 5000;

//express config 
app.use(express.static(path.resolve(__dirname, 'public')));

//handlebars config 
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views')

//routes
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, () => console.log(`Server is running on port ${port}...`))