
function apply(defaults, config) {
	var ret = {},
		key;
	for (key in defaults) {
		if (defaults.hasOwnProperty(key)) {
			ret[key] = defaults[key];
		}
	}
	for (key in config) {
		if (config.hasOwnProperty(key)) {
			ret[key] = config[key];
		}
	}
	return ret;
}
