import * as express from 'express';
import ExampleRouter from './example/exampleRouter';
import UserRouter from './user/userRouter';

export function applyRoutes(): express.Router {
    let router: express.Router = express.Router();

    const modules: Array<any> = [
        ExampleRouter, UserRouter
    ];

    modules.forEach(module => module.applyRoutes(router));

    return router;
}
