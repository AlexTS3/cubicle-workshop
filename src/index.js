const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig')
const routes = require('./routes')

const app = express();

const PORT = 5000;

dbConnect()
    .then(() => console.log('DB connected succsessfully'))
    .catch(err => { console.log('DB error', err) });

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

/*dbConnect()
    .then(() => {

        expressConfig(app);
        handlebarsConfig(app);

        app.use(routes);

        console.log('DB connected succsessfully');
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
    })
    .catch(err => {
        console.log('DB error: ', err);
    })     */ 