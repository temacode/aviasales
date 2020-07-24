const express = require('express');
const bodyParser = require('body-parser');
const colors = require('./helpers/term-colors');
const { Pool } = require('pg');

const connectionString = 'postgresql://artem:6070050@localhost:5432/aviasales';

const pool = new Pool({
    connectionString: connectionString,
});
pool.connect();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

require('./routes/tasksRoute')(app, pool);

app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    console.log(path);
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Сервер успешно запущен по адресу ${colors.cyan}http://localhost:${port}\n${colors.reset}`);
});