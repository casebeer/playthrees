function test() {
	g = new Game();
	g.addPlayer('p1');
	g.addPlayer('p2');
	g.start();
	return g;
}

g = test();
d = document.getElementById('debug');
d.value += g.toString();
d.value += "\n\nroll(0)\n---\n";
g.roll(0)
d.value += g.toString();
g.markPin(1);
d.value += "\n\nmarkPin(1)\n---\n";
d.value += g.toString();
g.pin();
d.value += "\n\npin()\n---\n";
d.value += g.toString();

