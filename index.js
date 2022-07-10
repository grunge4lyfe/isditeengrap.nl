const dotenv = require('dotenv');
const path = require('path');
const express = require('express');

dotenv.config();
const port = process.env.PORT || 3030;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const yes = Math.floor(Math.random() * 2) == 0;

    res.render('index', {
        yes: yes
    });
});

app.listen(port, () => {
    console.log(`[server] now running at *:${port}!`);
});
