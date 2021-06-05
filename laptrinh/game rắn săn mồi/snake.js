class snake {
	constructor(game) {
		this.game = game;
		this.x = GAME_WIDTH / 2;
		this.y = GAME_HEIGHT / 2;

		this.angle = 0;
		this.tailPosition = [];

		this.creteTail();

		this.listerMouseEvent();
	}
	listerMouseEvent() {
		this.game.canvas.addEventListener('mousemove', (event) => {
			var rect = this.game.canvas.getBoundingClientRect();
			this.procesMouseMove({
				x: event.clientX - rect.left,
				y: event.clientY - rect.top
			});
		});
	}
	procesMouseMove(mousePos){
		this.angle = Math.atan2(
			mousePos.y - (SCREEN_HEIGHT / 2),
			mousePos.x - (SCREEN_WIDTH / 2)
		)
		//console.log(this.angle);
	}

	creteTail() {
		for (let i = 0; i < 100; i++) {
			this.tailPosition.push({
				x: this.x - (i * SNAKE_SPEED),
				y: this.y
			});
		}
	}

	update() {
		let newTailPosition = {
			x: this.x += Math.cos(this.angle) * SNAKE_SPEED,//drawCircle
			y: this.y += Math.sin(this.angle) * SNAKE_SPEED
		}
		this.tailPosition.unshift(newTailPosition);
		this.tailPosition.pop();

		this.x = newTailPosition.x;
		this.y = newTailPosition.y;
		
	}
	draw() {
		for (let i = this.tailPosition.length - 1; i > 1; i++) {
			if (i % 5 != 0) {}
			this.game.screen.drawCircle({
				x: this.tailPosition[i].x,
				y: this.tailPosition[i].y
			}, 'snake');
		}
	}
}