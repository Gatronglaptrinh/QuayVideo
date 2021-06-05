c = document.getElementById('c');
ctx = c.getContext('2d');
function animation() {
	setInterval(function() {
		player(0, 40, '1')
	}, 1000);
}
function player(x, y, text) {
	ctx.fillStyle = "black";
	ctx.font = "20px";
	ctx.fillText("Player" + text, x, y);
	ctx.fill();
}