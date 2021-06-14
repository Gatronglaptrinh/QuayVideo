var x = true;
var y = false;
function button() {
	ctx.fillStyle = 'blue';
	ctx.fillRect(200, 50, 900, 200);
	ctx.fillStyle = 'gold';
	ctx.font = '130px Times New Roman';
	ctx.fillText("Chơi!", 510, 180);
	ctx.fillStyle = 'blue';
	ctx.fillRect(200, 300, 900, 200);
	ctx.fillStyle = 'gold';
	ctx.font = '130px Times New Roman';
	ctx.fillText("Mobster Book!", 290, 430);
}
canvas.addEventListener('click', function(e){
	if (230 <= e.x && e.x <= 1130 && 80 <= e.y && e.y <= 280 && x == true) {
		play();
		x = false;
		alert('hello');
		console.log(e);
	}
	if (230 <= e.x && e.x <= 1130 && 330 <= e.y && e.y <= 530 && x == true) {
		book();
		x = false;
		y = true;
		console.log(e);
	}
	console.log(e);
});
function display() {
	button();
	if (x) {
		requestAnimationFrame(display);
	}
}
display();