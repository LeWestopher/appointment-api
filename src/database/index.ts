const db = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'appoint_local',
        password: 'appoint_local',
        database: 'appointments'
    }
});

export default db;