function define (envName, config) {
	// hidden variables
	var common = {}, envs = { 'default' : {} };

	var block;
	if (typeof config == 'function') {
		block = config;
		config = {};
	}

	config.param = function (name) {
		var env = process.env[envName] || 'default';

		return envs[env][name] || common[name];
	};

	// loophole
	config.dump = function () {
		return {
			common : common,
			config : envs
		};
	};

	var factory = {
		common : function (obj) {
			common = obj;
		},

		config : function (env, obj) {
			envs[env] = obj;
		}
	};

	if (block) {
		block(factory);
		return config;
	}

	return factory;
}

this.define = define;
