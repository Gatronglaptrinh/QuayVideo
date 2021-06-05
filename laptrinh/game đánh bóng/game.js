c = document.getElementById('mycanvas');
ctx = c.getContext('2d');
c.width = 800;
c.height = 400;
var ball = {
	x: 400,
	y: 200,
	dx: 5,
	dy: 3,
	radius: 5
};
var paddle1 = {
	x: 100,
	y: 200,
	width: 10,
	height: 50,
	speed: 10,

	isMovingUp: false,
	isMovingDown: false
};
var paddle2 = {
	x: 700,
	y: 200,
	width: 10,
	height: 50,
	speed: 10,

	isMovingUp: false,
	isMovingDown: false
};
function drawBall() {
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
	ctx.fillStyle = 'red';
	ctx.fill();
	ctx.closePath();
}
function drawPaddle1() {
	ctx.beginPath();
	ctx.rect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
	ctx.fill();
	ctx.closePath();
}
function drawPaddle2() {
	ctx.beginPath();
	ctx.rect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
	ctx.fill();
	ctx.closePath();
}
document.addEventListener('keyup', function(e) {
	if (e.which == 38) {
		paddle2.isMovingUp = false;
	}else if (e.which == 40) {
		paddle2.isMovingDown = false;
	}
	if (e.which == 87) {
		paddle1.isMovingUp = false;
	}else if (e.which == 83) {
		paddle1.isMovingDown = false;
	}
});

document.addEventListener('keydown', function(e) {
	if (e.which == 38) {
		paddle2.isMovingUp = true;
	}else if (e.which == 40) {
		paddle2.isMovingDown = true;
	}
	if (e.which == 87) {
		paddle1.isMovingUp = true;
	}else if (e.which == 83) {
		paddle1.isMovingDown = true;
	}
	//console.log(e.which);
});

function position() {
	ball.x += ball.dx;
	ball.y += ball.dy;
}
function collision() {
	if (ball.x < ball.radius || ball.x > c.width - ball.radius) {
		ball.dx = -ball.dx;
	}
	if (ball.y < ball.radius || ball.y > c.height - ball.radius) {
		ball.dy = -ball.dy;
	}
}
function counterclaim1() {
	if (ball.x + ball.radius == paddle1.x && ball.x + ball.radius >= paddle1.x + paddle1.height &&
	ball.y + ball.radius >= c.width - paddle1.width) {
		ball.dx = -ball.dx;
	}
}
function counterclaim2() {
	if (ball.x + ball.radius >= paddle2.x && ball.x + ball.radius <= paddle2.x + paddle2.height &&
	ball.y + ball.radius >= c.width - paddle2.width) {
		ball.dx = -ball.dx;
	}
}
function update1() {
	if (paddle1.isMovingUp) {
			paddle1.y -= paddle1.speed;
		} 
		else if (paddle1.isMovingDown) {
			paddle1.y += paddle1.speed;
		}
		if (paddle1.y < 0) {
			paddle1.y = 0;
		} 
		else if (paddle1.y > c.height - paddle1.height) {
			paddle1.y = c.height - paddle1.height;
		}
}
function update2() {
	if (paddle2.isMovingUp) {
			paddle2.y -= paddle2.speed;
		} 
		else if (paddle2.isMovingDown) {
			paddle2.y += paddle2.speed;
		}
		if (paddle2.y < 0) {
			paddle2.y = 0;
		} 
		else if (paddle2.y > c.height - paddle2.height) {
			paddle2.y = c.height - paddle2.height;
		}
}
function drawScore() {
	ctx.beginPath();
	ctx.font = '60px time new roman';
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText('0', 200, 200);
	ctx.fillText('0', 600, 200);
	ctx.closePath();
}

function clear() {
	ctx.clearRect(0, 0, c.width, c.height);
}
function draw() {
	clear();

	drawBall();
	drawPaddle1();
	drawPaddle2();
	drawScore();

	position();
	collision();
	update1();
	update2();
	counterclaim2();
	counterclaim1();

	requestAnimationFrame(draw);
}
draw();