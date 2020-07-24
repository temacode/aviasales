const express = require('express');
const bodyParser = require('body-parser');
const colors = require("./helpers/term-colors");
const { Pool } = require('pg');

const connectionString = 'postgresql://artem:6070050@localhost:5432/aviasales';

const pool = new Pool({
    connectionString: connectionString,
});
pool.connect();

// Запрос на создание базы данных

/* const query = `CREATE TABLE shared_users (
    id SERIAL PRIMARY KEY,
    shared Boolean NOT NULL DEFAULT FALSE,
    email varchar(255)
)`; */

//Запрос на добавление в таблицу с возвратом поля id
//const query = `INSERT INTO shared_users (shared, email) VALUES ('TRUE', 'lol@test.ru') RETURNING id;`;

//Возвращает пользователя с id
//const query = `SELECT * FROM shared_users WHERE id=2`;

//Обновление данных о пользователе с id
//const query = `UPDATE shared_users SET shared=true, email='artem@icloud.com' WHERE id=2`;

/* pool.query(query, (err, res) => {
    console.log(err, res);
    pool.end();
}); */

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