import * as express from "express";
import UserController from './userController';

export default class UserRouter {
    static handleRoutes(): express.Router {
        let router = express.Router();

        // Designate REST routes here
        router.get('/', UserController.index);
        router.get('/:id', UserController.read);
        router.post('/', UserController.add);
        router.put('/:id', UserController.update);
        router.patch('/:id', UserController.update);
        router.delete('/:id', UserController.remove);
        
        return router;
    }

    static applyRoutes(router: express.Router): void {
        router.use("/users", UserRouter.handleRoutes());
    }
}