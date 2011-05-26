function Game(config) {
	var i;
	this.options = apply({numDice:5}, config);
	//this.scoreboard = new ScoreBoard();

	this.curPlayer;
	this.players = [];	

	this.inPlay = [];
	for (i = 0; i < this.options.numDice; i++) {
		this.inPlay[i] = new Die();
	}
	this.pinned = [];
	this.toPin = [];
}

Game.prototype.addPlayer = function (name) {
	this.players = {name:name};
};

Game.prototype.start = function () {
	curPlayer = 0;
};

Game.prototype.nextTurn = function () {

};

Game.prototype.roll = function() {
	// also check not first roll in turn
	if (this.toPin.length == 0) {
		throw "Cannot roll without pinning at least one die.";
	}

	forEach(this.toPin, function (d) { 
		this.pinned.push(d);
	});
	this.toPin = [];

	if (this.inPlay.length > 0) {
		forEach(this.inPlay, function (d) {
			d.roll();
		}
		if (this.inPlay.length == 1)  {
			this.pin(0);
			this.endTurn();
		}
	} else {
		this.endTurn();
	}
}

Game.prototype.endTurn = function() {
	var score;
	s = new Score();
	score = s.calc(this.pinned);
}

Game.prototype.pin = function (die) {
	this.pinned.push(this.inPlay.splice(die, die));
};
