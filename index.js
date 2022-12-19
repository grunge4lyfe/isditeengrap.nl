const dotenv = require('dotenv');
const path = require('path');
const express = require('express');

dotenv.config();
const port = process.env.PORT || 3030;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/api/v1', (req, res) => {
    res.send({
        result: Math.random() < 0.5
    });
});

app.get('/', (req, res) => {
    res.render('index', { 
        result: Math.random() < 0.5 
    });
});

app.listen(port, () => {
    console.log(`[server] now running at *:${port}!`);
});
