function define (envName, config) {
	// hidden variables
	var common = {}, envs = { 'default' : {} };

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

	return {
		common : function (obj) {
			common = obj;
		},

		config : function (env, obj) {
			envs[env] = obj;
		}
	};
}

this.define = define;
