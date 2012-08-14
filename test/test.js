#!/usr/bin/env node

var assert = require('assert');

var config = require('./data/config1');

console.log(config.dump());

assert.strictEqual(config.param('name'), 'test');
assert.strictEqual(config.param('foo'), undefined);

process.env['NODE_ENV'] = 'development';
assert.strictEqual(config.param('name'), 'test');
assert.strictEqual(config.param('foo'), 'dev');

process.env['NODE_ENV'] = 'production';
assert.strictEqual(config.param('name'), 'test');
assert.strictEqual(config.param('foo'), 'prod');

