import db from '../../database/index';
const Bluebird = require('bluebird');
const _ = require('lodash');

export default class User {

    id?: number;
    title: string;
    description?: string;
    startTime: Date;
    endTime?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    dirty: Array<string>;


    constructor(raw) {
        _.extend(this, raw);
        this.dirty = [];
    }

    static query() {
        return db(this.table())
            /*.map(result => {
                return new User(result); 
            })*/;
    }

    static all() {
        return new Bluebird((resolve, reject) => {
            return this.query()
                .map(result => {
                    return new User(result);
                })
                .then(results => {
                    return resolve(results);
                })
                .catch(error => {
                    return reject(error);
                });
        });
    }

    static find(options) {
        options = options || {};
        let query = this.query();

        if (options.where) {
            query.where(options.where);
        }

        if (options.limit) {
            query.limit(options.limit);
        }

        if (options.select) {
            query.select(options.select);
        }

        return new Bluebird((resolve, reject) => {
            return query
                .map(result => {
                    return new User(result);
                })
                .then(results => {
                    return resolve(results);
                })
                .catch(error => {
                    return reject(error);
                });
        })
    }

    static one(id): Promise<User> {
        return new Bluebird((resolve, reject) => {
            User.query()
                .where('id', '=', id)
                .first()
                .then(result => {
                    resolve(new User(result));
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

    static update(id, dirty) {
        return this.query()
            .where({id})
            .update(dirty);
    }

    static remove(query) {
        if (typeof query === 'number') {

        }
    }

    static create(raw) {
        return new this(raw)
            .save();
    }

    fields() {
        return ['email', 'password', 'firstName', 'lastName', 'addressOne',
        'addressTwo', 'city', 'state', 'zip', 'country', 'phone', 'createdAt', 'updatedAt'];
    }

    getEntity() {
        let entity = {};
        this.fields().forEach(field => {
            entity[field] = this[field];
        });
        return entity;
    }

    static table() {
        return 'users';
    }

    eTable() {
        return 'users';
    }

    save() {
        return (!!this.id) ? this.saveUpdate() : this.saveNew();
    }

    saveNew() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        return new Bluebird((resolve, reject) => {
            return db(this.eTable())
                .returning('id')
                .insert(this.getEntity())
                .then(id => {
                    this.id = id;
                    return resolve(this);
                })
                .catch(error => {
                    return reject(error);
                });
        });
    }

    getDirty() {
        let dirty = {}
        this.dirty.forEach(field => {
            dirty[field] = this[field];
        });
        return dirty;
    }

    markClean() {
        this.dirty = [];
        return this;
    }

    saveUpdate() {
        this.updatedAt = new Date();
        return new Bluebird((resolve, reject) => {
            return db(this.eTable())
                .returning('id')
                .where('id', '=', this.id)
                .update(this.getDirty())
                .then(id => {
                    this.markClean();
                    return resolve(this);
                })
                .catch(error => {
                    return reject(error);
                });
        });
    }

}