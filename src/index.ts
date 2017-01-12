require('babel-core/register');
require('babel-polyfill');
import * as express from 'express';
import {applyRoutes} from './modules/index';
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use('/api/v1', applyRoutes());


app.listen(40000, () => {
    console.log('TypeScript app listening on port 40000.');
});
