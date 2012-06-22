describe("a game", function() {
	var g;

	beforeEach(function() {
		g = new Game();
	});

	afterEach(function() {
		g = undefined;
	});

	it("can be started with default values", function() {
		expect(g.players.length).toEqual(0);
		expect(g.inPlay.length).toBeGreaterThan(0);
		expect(g.toPin.length).toEqual(0);
		expect(g.pinned.length).toEqual(0);
	});

	describe("a game with two players", function() {
		beforeEach(function() {
			g.addPlayer('p1');
			g.addPlayer('p2');
			g.start();
		});

		it("doesn't allow a player to roll if it's not their turn", function() {
			expect(function(){g.roll(1)}).toThrow();
		});

		describe("what a player can do after they roll", function() {
			beforeEach(function() {
				g.roll(0);
			});
			
			xit("has different values after a roll", function() {
				
			});
	
			it("doesn't allow a player to roll again after a roll if they haven't pinned anything", function() {
				expect(function(){g.roll(0)}).toThrow();
			});

			it("allows player to mark dice to pin", function() {
				var dieToPin = g.inPlay[2];
				g.markPin(2);
				expect(g.toPin[0]).toBe(dieToPin);
			});
		});

	});


});
