function Score(config) {
	this.options = apply({zeroVal:3}, config);
}

Score.prototype.calc = function(dice) {
	var score = 0,
		options = this.options;
	return reduce(function(base, d) {
		if (d.value != options.zeroVal) {
			base += d.value;
		}
		return base;
	}, score, dice);
}

