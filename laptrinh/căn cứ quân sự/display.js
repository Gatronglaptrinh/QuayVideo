var x = true;
var y = false;
let y2 = 600;
var dy = 5;
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
function hieuung() {
	ctx.fillStyle = "orange";
	ctx.font = '50px Orbitron';
	ctx.fillText("PC" ,20, y2);
	ctx.fillStyle = "orange";
	ctx.font = '50px Orbitron';
	ctx.fillText("PE" ,1200, y2);
	y2 -= dy;
	if (y2 <= 300 || y2 >= 700) {
		dy = -dy;
	}
}
canvas.addEventListener('click', function(e){
	if (230 <= e.x && e.x <= 1130 && 80 <= e.y && e.y <= 280 && x == true) {
		play();
		document.getElementById('chu').style.display = 'inline';
		x = false;
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
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	button();
	ctx.fillStyle = "red";
	ctx.font = '30px Orbitron';
	ctx.fillText("v1.1.3.0" ,5, 595);
	ctx.fillStyle = "red";
	ctx.font = '30px Orbitron';
	ctx.fillText('Bạn nghĩ gì về game có thể chơi trên máy tính và di động', 250, 40);
	hieuung();
	if (x) {
		requestAnimationFrame(display);
	}
}
display();