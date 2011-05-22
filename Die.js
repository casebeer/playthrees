/**
 * Model die
 *
 */
function Die() {
	this.roll();
}
Die.prototype.roll = function () {
	this.value = Math.floor(Math.random() * 6) + 1;
}
