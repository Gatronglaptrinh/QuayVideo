c = document.getElementById('c');
c.width = 600;
c.height = 400;
ctx = c.getContext('2d');
function animation() {
	player(50, 100, 'Player 1');
	player(400, 100, 'Player 2');
	requestAnimationFrame(animation);
}
function player(x, y, text) {
	ctx.fillStyle = "black";
	ctx.font = "50px Times New Roman";
	ctx.fillText(text, x, y);
	ctx.fill();
}
animation();