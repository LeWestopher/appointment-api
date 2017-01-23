import Model from '../../util/model';
import _ from 'lodash';
import db from '../../database/index';

export default class UserModel extends Model {
    static async all() {
        return await db('users');
    }
}