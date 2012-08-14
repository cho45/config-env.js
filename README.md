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

			config.config('production', {
				foo : 'prod'
			});

			config.config('development', {
				foo : 'dev'
			});
	});
	
	config.param('name');
	config.param('foo');

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


