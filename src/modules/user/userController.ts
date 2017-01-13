import * as express from "express";
import User from './usersModel';
import {success, error} from '../../util';

export default class UserController {

    static async index(req: express.Request, res: express.Response) {
        try {
            res.json(success(await User.all()))
        } catch (e) {
            res.json(error(e));
        }
    }

    static async read(req: express.Request, res: express.Response) {
        try {
            res.json(success(await User.one(req.params.id)));
        } catch (e) {
            res.json(error(e));
        }
    }

    static async add(req: express.Request, res: express.Response) {
        try {
            res.json(success(await User.create(req.body)));
        } catch (e) {
            res.json(error(e));
        }
    }

    static async update(req: express.Request, res: express.Response) {
        try {
            res.json(success(await User.update(req.params.id, req.body)));
        } catch (e) {
            res.json(error(e));
        }
    }

    static async remove(req: express.Request, res: express.Response) {
        // NYI
    }
    
}