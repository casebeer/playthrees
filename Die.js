/**
 * Model die
 *
 */
function Die(config) {
	this.options = apply({ range: [1,6], loaded: false }, config);
	this.roll();
}
Die.prototype.roll = function () {
	this.value = Math.floor(Math.random() * this.options.range[1]) + this.options.range[0];
}
