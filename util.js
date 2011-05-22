
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

function forEach(a, f) {
	var i;
	for (i in a) {
		if (a.hasOwnProperty(i)) {
			f(a[i]);
		}
	}
}

function map(f, a) {
	var result = []
	forEach(a, function(e) {
		result.push(f(e));
	}); 
	return result;
}

function reduce(combine, base, a) {
	forEach(a, function(x) {
		base = combine(base, x);
	});
	return base;
}
