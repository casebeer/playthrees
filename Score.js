function Score(config) {
	var options = {zeroVal:3};
	}

Score.prototype.calculateScore = function(dice) {
	// todo: value is coming up undefined!?
	var score;
	reduce(function(d) {
		if (d.value != options.zeroVal) {
			this.score += d.value;
		}
	}, this.score, dice);
}

