
const pg = require('pg');
const config = require('./config');

const pool = new pg.Pool({
	host: config.db.host,
	user: config.db.user,
	password: config.db.password,
	database: config.db.database
});

pool.on('error', function (err, client) {
	console.error('idle client error:', err.message, err.stack);
});

module.exports.query = function (text, values, cb) {
	return pool.query(text, values, cb);
};

module.exports.connect = function (cb) {
	return pool.connect(cb);
};
