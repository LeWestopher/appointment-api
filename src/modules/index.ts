import * as express from 'express';
import ExampleRouter from './example/exampleRouter';
import UserRouter from './user/userRouter';

export function applyRoutes(): express.Router {
    let router: express.Router = express.Router();

    const modules: Array<any> = [
        ExampleRouter, UserRouter
    ];

    modules.forEach(module => module.applyRoutes(router));

    router.get('/', (req, res) => {
        return res.json({
            title: 'Appointment Tracker - Boone Software',
            api: 'v1',
            contributors: 'Wes King && Coty Abadie && Boone Software - 2016 All Rights Reserved'
        });
    })

    return router;
}
