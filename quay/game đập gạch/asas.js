var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var ball = {
	x: 20,
	y: 200,
	dx: 50,
	dy: 10,
	radius: 10
};

var paddle = {
	width: 500,
	height: 10,
	x: 0,
	y: canvas.height - 10,
	speed: 20,

	isMovingLeft: false,
	isMovingRight: false
};
var brick = {
	offsetX: 25,
	offsetY: 25,
	margin: 25,
	width: 45,
	height: 15,
	row: 5,
	col: 7
};

var isGameOver = false;
var isGameWin = false;
var score = 0;
var maxScore = brick.row * brick.col;

var brickList = [];
for(i = 0; i < brick.row; i++) {//score
	for(j = 0; j < brick.col; j++) {
		brickList.push({
			x: brick.offsetX + j * (brick.width + brick.margin),
			y: brick.offsetY + i * (brick.height + brick.margin),
			isBroken: false
		});
	}
}

document.addEventListener('keyup', function(e) {
	if (e.which == 37) {
		paddle.isMovingLeft = false;
	}else if (e.which == 39) {
		paddle.isMovingRight = false;
	}
});

document.addEventListener('keydown', function(e) {
	if (e.which == 37) {
		paddle.isMovingLeft = true;
	}else if (e.which == 39) {
		paddle.isMovingRight = true;
	}
});

function drawBall(){
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
	ctx.fillStyle = 'red';
	ctx.fill();
	ctx.closePath();
}
function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
	ctx.fill();
	ctx.closePath();
}
function drawBrick() {
	brickList.forEach(function (b) {
		if(!b.isBroken) {
			ctx.beginPath();
			ctx.rect(b.x, b.y, brick.width, brick.height);
			ctx.fill();
			ctx.closePath();
	}
	});
}

function collision() {
	if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
		ball.dx = -ball.dx;
	}
	if (ball.y < ball.radius) {
		ball.dy = -ball.dy;
	}
}

function counterclaim() {
	if (ball.x + ball.radius >= paddle.x && ball.x + ball.radius <= paddle.x + paddle.width && ball.y + ball.radius >= canvas.height - paddle.height) {
		ball.dy = -ball.dy;
	}
}

function position() {
	ball.x += ball.dx;
	ball.y += ball.dy;
}

function collisionBrick() {
	brickList.forEach(function (b) {
		if (!b.isBroken) {
			if (ball.x >= b.x && ball.x <= b.x + brick.width 
				&& ball.y + ball.radius >= b.y && ball.y - ball.radius <= b.y + brick.height) {
				ball.dy = -ball.dy;
				b.isBroken = true;
				score += 1;
				document.querySelector('#score').innerText = score;
				if (score >= maxScore) {
					isGameWin = true;
					isGameOver = true;
				}
			}
		}
	});
}

function update() {
	if (paddle.isMovingLeft) {
			paddle.x -= paddle.speed;
		} else if (paddle.isMovingRight) {
			paddle.x += paddle.speed;
		}
		if (paddle.x < 0) {
			paddle.x = 0;
		} else if (paddle.x > canvas.width - paddle.width) {
			paddle.x = canvas.width - paddle.width;
		}
}
function hanlleGameOver() {
	if (isGameWin) {
		alert("You win");
		alert("Game over");
		alert("Bạn có " + score + " điểm");
		console.log("You win");
		console.log("Game over");
		console.log("Bạn có " + score + " điểm");
	} else {
		alert("You lose");
		alert("Game over");
		alert("Bạn có " + score + " điểm");
		console.log("You lose");
		console.log("Game over");
		console.log("Bạn có " + score + " điểm");
	}
}
function draw(){
	if (!isGameOver) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBall();
		drawPaddle();
		drawBrick();

		update();
		collision();
		collisionBrick();

		position();
		counterclaim();

		requestAnimationFrame(draw);
	} else {
		hanlleGameOver();
	}
}

draw();