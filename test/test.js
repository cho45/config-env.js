#!/usr/bin/env node

var assert = require('assert');

(function () {
	var config = require('../lib/config-env.js').define('NODE_ENV', function (config) {
		config.common({
			name: 'test'
		});

		config.config('production', {
			foo : 'prod'
		});

		config.config('development', {
			foo : 'dev'
		});
	});

	delete process.env['NODE_ENV'];
	assert.strictEqual(config.param('name'), 'test');
	assert.strictEqual(config.param('foo'), undefined);

	process.env['NODE_ENV'] = 'development';
	assert.strictEqual(config.param('name'), 'test');
	assert.strictEqual(config.param('foo'), 'dev');

	process.env['NODE_ENV'] = 'production';
	assert.strictEqual(config.param('name'), 'test');
	assert.strictEqual(config.param('foo'), 'prod');
})();


(function () {
	var config = require('./data/config1');

	delete process.env['NODE_ENV'];
	assert.strictEqual(config.param('name'), 'test');
	assert.strictEqual(config.param('foo'), undefined);

	process.env['NODE_ENV'] = 'development';
	assert.strictEqual(config.param('name'), 'test');
	assert.strictEqual(config.param('foo'), 'dev');

	process.env['NODE_ENV'] = 'production';
	assert.strictEqual(config.param('name'), 'test');
	assert.strictEqual(config.param('foo'), 'prod');
})();
