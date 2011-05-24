function Score(config) {
	this.options = {zeroVal:3};
}

Score.prototype.calc = function(dice) {
	var score = 0;
	var options = this.options;
	return reduce(function(base, d) {
		if (d.value != options.zeroVal) {
			base += d.value;
		}
		return base;
	}, score, dice);
}

