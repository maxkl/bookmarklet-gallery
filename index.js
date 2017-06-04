
const express = require('express');
const db = require('./db');

module.exports = function (app) {
	const router = new express.Router();

	router.get('/', function (req, res) {
		db.query('SELECT $1::text AS name', [ req.query.name ], function (err, result) {
			if(err) {
				next(err);
				return;
			}

			res.send('name:' + result.rows[0].name);
		});
	});

	return router;
};
