require('babel-core/register');
require('babel-polyfill');
import * as express from 'express';
import {applyRoutes} from './modules/index';
import * as bodyParser from 'body-parser';
import db from './database/index';
import User from './modules/user/usersModel';

const app = express();
app.use(bodyParser.json());
app.use('/api/v1', applyRoutes());

app.get('/users', (req, res) => {
    User.query()
        .select('*')
        .then(result => {
            res.json(result);
        });
});

app.post('/users', (req, res) => {
    User.create(req.body)
        .then(result => {
            return res.json(result);
        })
});


app.listen(40000, () => {
    console.log('TypeScript app listening on port 40000.');
});
