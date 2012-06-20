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

Game.prototype.toString = function() {
	var s = "pinned: " + this.pinned.toString() + "\n";
	s += "curPlayer: " + this.players[this.curPlayer].name + "\n";
	s += "to pin: " + this.toPin.toString() + "\n";
	s += "in play: " + this.inPlay.toString();
	return s;
}

Game.prototype.addPlayer = function(name) {
	this.players.push(new Player(name));
};

Game.prototype.start = function() {
	this.initTurnForPlayer();
};

Game.prototype.nextRoll = function() {
	if (this.toPin.length > 0) {
		this.pin();
	} else {
		throw "Need to pin at least one die before next roll";
	}
};

Game.prototype.nextTurn = function() {
	if (this.pinned.length > 0) {
		this.curPlayer++;
		this.initTurnForPlayer();
	} else {
		throw "Need to pin at least one die";
	}
};

Game.prototype.initTurnForPlayer = function () {
	// if player index is out of bounds or not specified, reset to 0
	if (this.curPlayer >= this.players.length || isDefined(this.curPlayer) == false) {
		this.curPlayer = 0;
	}

	// create new turn
	this.players[this.curPlayer].turns.push(new Turn());
};

Game.prototype.roll = function(playerId) {
	var thisTurn = this.getCurrentTurn();

	if (this.curPlayer != playerId) {
		throw "Not your turn!"
	}

	if (thisTurn.rolls.length == thisTurn.pins.length + 1) {
		throw "Cannot roll without pinning at least one die.";
	}
	
	if (this.players[this.curPlayer].turns.length > 1) {
		// also check not first roll in turn
		if (this.toPin.length == 0) {
			throw "Cannot roll without pinning at least one die.";
		}

		forEach(this.toPin, function (d) { 
			this.pinned.push(d);
		});
		this.toPin = [];
	}

	if (this.inPlay.length > 0) {
		var rollSet = [];
		forEach(this.inPlay, function (d) {
			d.roll();
			rollSet.push[d.value];
		});

		// add this set of rolls to this player's turn
		thisTurn.rolls.push(rollSet);

		if (this.inPlay.length == 1)  {
			this.pin(0);
			this.endTurn();
		}
	} else {
		this.endTurn();
	}
}

Game.prototype.getCurrentTurn = function() {
	var t = this.players[this.curPlayer].turns;
	var thisTurn = t[t.length - 1];
	return thisTurn;
}

Game.prototype.endTurn = function(die) {
	var score;
	s = new Score();
	score = s.calc(this.pinned);
}

Game.prototype.pin = function () {
	if(this.toPin.length > 0) {
		this.pinned.splice(-1, 0, this.toPin);
		thisTurn = this.getCurrentTurn()
		pinSet = [];
		forEach(this.toPin, function(d) {
			pinSet.push(d.value);
		}); 
		thisTurn = this.getCurrentTurn();
		thisTurn.pins.push(pinSet);
		this.toPin = [];
	} else {
		throw 'Nothing to pin';
	}
}

Game.prototype.markPin = function (die) {
	var lastTurnIndex = this.players[this.curPlayer].turns.length - 1;
	if(this.players[this.curPlayer].turns[lastTurnIndex].rolls.length > 0) {
		if(isDefined(this.inPlay[die])) {
			this.toPin.push(this.inPlay.splice(die, 1)[0]);
		} else {
			throw "no die in play at index " + die;
		}
	} else {
		throw "can't pin without rolling at least once in this turn";
	}
};

var isDefined = function(obj) {
	var defined = true;
	if(typeof(obj) == 'undefined') {
		defined = false;
	}
	return defined;
};

/*
who's turn?
what roll they're on
	in_play <= num_rolls
if they've pinned enough for the next roll
	
*/
