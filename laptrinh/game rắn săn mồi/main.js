class game {
	constructor() {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		document.body.appendChild(this.canvas);

		this.canvas.width = SCREEN_WIDTH;
		this.canvas.height = SCREEN_HEIGHT;

		this.snake = new snake(this);
		this.background = new bg(this);
		this.screen = new screen(this);

		this.loop();
	}

	loop() {
		//console.log('loop');
		this.update();
		this.draw();
		setTimeout(() => this.loop(), 20);
	}

	update() {
		this.snake.update();
		this.background.update();
		this.screen.update();
	}

	clearScreen() {
		this.ctx.fillStyle = '#f2f2f2';
		this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
	}

	draw() {
		this.clearScreen();
		this.background.draw();
		this.snake.draw();
		//this.screen.drawCircle({x: 2400, y: 2400});
	}
}

var g = new game();