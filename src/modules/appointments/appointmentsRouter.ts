import * as express from "express";
import AppointmentsController from './appointmentsController';

export default class AppointmentsRouter {
    static handleRoutes(): express.Router {
        let router = express.Router();

        // Designate REST routes here
        router.get('/', AppointmentsController.index);
        router.get('/:id', AppointmentsController.read);
        router.post('/', AppointmentsController.add);
        router.put('/:id', AppointmentsController.update);
        router.patch('/:id', AppointmentsController.update);
        router.delete('/:id', AppointmentsController.remove);
        
        return router;
    }

    static applyRoutes(router: express.Router): void {
        router.use("/appointments", AppointmentsRouter.handleRoutes());
    }
}