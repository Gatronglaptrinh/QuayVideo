class bg {
	constructor(game) {
		this.game = game;
	}

	update() {

	}

	drawLine(startPos, endPos) {
		this.game.ctx.strokeStyle = '#d9d9d9';
		this.game.ctx.lineWidth = 3;
		this.game.ctx.beginPath();
		this.game.ctx.moveTo(startPos.x, startPos.y);
		this.game.ctx.lineTo(endPos.x, endPos.y);
		this.game.ctx.stroke();
	}

	draw() {
		//Vẽ đường dọc
		let firstLineX = GRID_SIZE - (this.game.snake.x % GRID_SIZE);
		let currentLineX = firstLineX;
		while(currentLineX <= SCREEN_WIDTH) {
			this.drawLine(
				{x: currentLineX, y: 0},
				{x: currentLineX, y: SCREEN_HEIGHT}
			);
			currentLineX += GRID_SIZE;
		}
		let firstLineY = GRID_SIZE - (this.game.snake.y % GRID_SIZE);
		let currentLineY = firstLineY;
		while(currentLineY  <= SCREEN_HEIGHT) {
			this.drawLine(
				{x: 0, y: currentLineY},
				{x: SCREEN_WIDTH, y: currentLineY}
			);
			currentLineY += GRID_SIZE;
		}

		/*this.drawLine(
		{x: 100, y: 100},
		{x: 200, y: 200}
		);*/
	}
}