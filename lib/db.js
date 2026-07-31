const Datastore = require('nedb-promises');
const path = require('path');

const dataDir = path.join(process.cwd(), 'data');

const users = Datastore.create({ filename: path.join(dataDir, 'users.db'), autoload: true });
const movies = Datastore.create({ filename: path.join(dataDir, 'movies.db'), autoload: true });

module.exports = { users, movies };
