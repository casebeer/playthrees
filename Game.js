function Game(config) {
	var i;
	this.options = apply({numDice:5}, config);
	this.curPlayer;
	this.players = [];	
	this.inPlay = [];
	for (i = 0; i < this.options.numDice; i++) {
		this.inPlay[i] = new Die();
	}
	this.pinned = [];
}

Game.prototype.addPlayer(name) {
	this.players = {name:name};
}

Game.prototype.start = function() {
	curPlayer = 0;
}

Game.prototype.nextTurn = function() {

};

Game.prototype.roll = function() {
	for (die in this.inPlay) {
		die.roll()
	}
};

Game.prototype.pin = function(die) {
	
}
