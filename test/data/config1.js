var config = require('../../lib/config-env').define('NODE_ENV', this);

config.common({
	name: 'test'
});

config.config('production', {
	foo : 'prod'
});

config.config('development', {
	foo : 'dev'
});
