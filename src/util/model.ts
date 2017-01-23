import db from '../database/index';
import Bluebird from 'bluebird';
import _ from 'lodash';
const compose = require('composition');

export default class Model {

    constructor() {
        
    }

    static table() {
        return '';
    }

    static query() {
        return db(this.table());
    }

    static async save(entity) {
        return await db(this.table())
            .returning('id')
            .insert(entity)
    }

    static async update(id) {

    }

    static all() {
        return db(this.table());
    }

    static async one(id) {
        return await this.query()
            .select()
            .where('id', '=', id)
            .first();
    }

    static async attachUser(user) {
        return entity => {
            entity.userId = user.id;
            return entity;
        }
    }

    static attachContact(contact) {
        return entity => {
            entity.contactId = contact.id;
            return entity;
        }
    }

    static attachAppointment(appointment) {
        return entity => {
            entity.appointmentId = appointment.id;
            return entity;
        }
    }

    static setField(field, value) {
        return entity => {
            entity[field] = value;
            return entity;
        }
    }

    static timestamps(entity) {
        entity.createdAt = new Date();
        entity.updatedAt = new Date();
        return entity;
    }

    static setUpdated(entity) {
        entity.updatedAt = new Date();
        return entity;
    }
}