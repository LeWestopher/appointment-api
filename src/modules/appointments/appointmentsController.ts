import * as express from "express";

export default class AppointmentsController {

    static async index(req: express.Request, res: express.Response) {
        res.json({success: true});
    }

    static async read(req: express.Request, res: express.Response) {
        res.json({success: true});
    }

    static async add(req: express.Request, res: express.Response) {
        res.json({success: true});
    }

    static async update(req: express.Request, res: express.Response) {
        res.json({success: true});
    }

    static async remove(req: express.Request, res: express.Response) {
        res.json({success: true});
    }
    
}