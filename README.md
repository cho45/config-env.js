config-env.js
=============

config-env is for switching various configurations by environment variable.

SYNOPSIS
========

Simple version

	var config = require('config-env').define('FOO_ENV', function (config) {
			config.common({
				name: 'test'
			});
	
			config.config('default', {
				foo : 'def'
			});
	
			config.config('production', {
				foo : 'prod'
			});
	
			config.config('development', {
				foo : 'dev'
			});
	});
	
	config.param('name'); // => 'test'
	config.param('foo'); //=> 'def'
	
	process.env['NODE_ENV'] = 'development';
	config.param('foo'); //=> 'dev'
	
	process.env['NODE_ENV'] = 'production';
	config.param('foo'); //=> 'prod'

Complex version

	// foo-config.js: config definition file
	var config = require('config-env').define('FOO_ENV', this);
	
	config.common({
		name: 'test'
	});
	
	config.config('production', {
		foo : 'prod'
	});
	
	config.config('development', {
		foo : 'dev'
	});
	
	// app.js: config use file
	var config = require('foo-config');
	
	config.param('name');
	config.param('foo');

With `ini` package:

	// foo-config.js: config definition file
	var config = require('config-env').define('FOO_ENV', this);
	var fs     = require('fs');
	var ini    = require('ini');

	var data = ini.decode(fs.readFileSync('./config.ini', 'utf-8'));
	
	config.common(data.common);
	config.config('default', data.default);
	config.config('development', data.development');

