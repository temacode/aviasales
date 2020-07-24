module.exports = (app, pool) => {
    app.get('/api/shared', (req, res) => {
        const query = 'INSERT INTO shared_users (shared, email) VALUES (\'false\', \'\') RETURNING id;';

        pool.query(query)
            .then(queryResult => {
                let userId = queryResult.rows[0].id;

                res.status(200).send({ id: userId });
            })
            .catch(e => {
                console.error(e.stack);

                res.status(500).sent('Server error');
            });
    });
    app.post('/api/shared', (req, res) => {
        const query = 'UPDATE shared_users SET shared=$1, email=$2 WHERE id=$3 RETURNING id, shared, email';

        const userInfo = req.body;

        pool.query(query, [ userInfo.shared, userInfo.email, userInfo.id ])
            .then(queryResult => {
                res.status(200).send(queryResult);
            })
            .catch(e => {
                console.error(e.stack);

                res.status(500).sent('Server error');
            });
    });
};