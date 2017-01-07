import * as express from "express";
import ContactsController from './contactsController';

export default class ContactsRouter {
    static handleRoutes(): express.Router {
        let router = express.Router();

        // Designate REST routes here
        router.get('/', ContactsController.index);
        router.get('/:id', ContactsController.read);
        router.post('/', ContactsController.add);
        router.put('/:id', ContactsController.update);
        router.patch('/:id', ContactsController.update);
        router.delete('/:id', ContactsController.remove);
        
        return router;
    }

    static applyRoutes(router: express.Router): void {
        router.use("/contacts", ContactsRouter.handleRoutes());
    }
}