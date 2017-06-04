
const express = require('express');
const db = require('./db');

module.exports = function (app) {
	const router = new express.Router();

	router.get('/', function (req, res, next) {
		db.query('SELECT id, title, description, source FROM bookmarklets WHERE id = $1', [ req.query.id ], function (err, result) {
			if(err) {
				next(err);
				return;
			}

			res.type('text/plain');
			res.send(JSON.stringify(result.rows[0], null, 4));
		});
	});

	return router;
};
