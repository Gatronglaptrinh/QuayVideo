var c = document.getElementById("iq");
var ctx = c.getContext('2d');
c.width = 800;
c.height = 400;
var player = null;
var computer = null;
var score = 0;
var live = 20;
var doithu = document.getElementById("doithu");
function drawButtonScissors() {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.rect(15, 15, 100, 50);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.font = '15px time new roman';
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText('Sword', 65, 45);
	ctx.closePath();
}
function drawButtonHammer() {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.rect(130, 15, 100, 50);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.font = '15px time new roman';
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText('Hammer', 180, 45);
	ctx.closePath();
}
function drawButtonBag() {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.rect(245, 15, 100, 50);//115+130=245
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.font = '15px time new roman';
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText('Paper', 295, 45);//180-65=115+180=295
	ctx.closePath();
}
function drawButtonStart() {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.rect(350, 15, 100, 50);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.font = '15px time new roman';
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText('Start!', 400, 45);
	ctx.closePath();
}

function playerDrawBag() {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.moveTo(50, 280);
	ctx.lineTo(140, 100);
	ctx.lineTo(320, 120);
	ctx.lineTo(230, 300);
	ctx.lineTo(50, 280);
	ctx.fill();
	ctx.closePath();
}
function computerDrawBag() {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.moveTo(430 + 50, 280);
	ctx.lineTo(430 + 140, 100);
	ctx.lineTo(430 + 320, 120);
	ctx.lineTo(430 + 230, 300);
	ctx.lineTo(430 + 50, 280);
	ctx.fill();
	ctx.closePath();
}
function playerDrawScissors() {
	ctx.beginPath();
	ctx.fillStyle = 'brown';
	ctx.moveTo(50, 280);
	ctx.lineTo(75, 260);
	ctx.lineTo(50, 240);
	ctx.lineTo(68, 220);
	ctx.lineTo(90, 245);
	ctx.lineTo(220, 100);
	ctx.lineTo(250, 90);
	ctx.lineTo(255, 125);
	ctx.lineTo(120, 270);
	ctx.lineTo(160, 280);
	ctx.lineTo(150, 300);
	ctx.lineTo(110, 290);
	ctx.lineTo(80, 310);
	ctx.lineTo(50, 280);
	ctx.fill();
	ctx.closePath();
}
function computerDrawScissors() {
	ctx.beginPath();
	ctx.fillStyle = 'brown';
	ctx.moveTo(430 + 50, 280);
	ctx.lineTo(430 + 75, 260);
	ctx.lineTo(430 + 50, 240);
	ctx.lineTo(430 + 68, 220);
	ctx.lineTo(430 + 90, 245);
	ctx.lineTo(430 + 220, 100);
	ctx.lineTo(430 + 250, 90);
	ctx.lineTo(430 + 255, 125);
	ctx.lineTo(430 + 120, 270);
	ctx.lineTo(430 + 160, 280);
	ctx.lineTo(430 + 150, 300);
	ctx.lineTo(430 + 110, 290);
	ctx.lineTo(430 + 80, 310);
	ctx.lineTo(430 + 50, 280);
	ctx.fill();
	ctx.closePath();
}
function playerDrawHammer() {
	ctx.beginPath();
	ctx.fillStyle = 'brown';
	ctx.moveTo(50 + 100, 380);
	ctx.lineTo(100 + 100, 200);
	ctx.lineTo(125 + 100, 210);
	ctx.lineTo(80 + 100, 390);
	ctx.lineTo(50 + 100, 380);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.moveTo(25 + 100, 180);
	ctx.lineTo(200 + 100, 230);
	ctx.lineTo(220 + 100, 180);
	ctx.lineTo(45 + 100, 125);
	ctx.lineTo(25 + 100, 180);
	ctx.fill();
	ctx.closePath();
}
function computerDrawHammer() {
	ctx.beginPath();
	ctx.fillStyle = 'brown';
	ctx.moveTo(430 + 50 + 100, 380);
	ctx.lineTo(430 + 100 + 100, 200);
	ctx.lineTo(430 + 125 + 100, 210);
	ctx.lineTo(430 + 80 + 100, 390);
	ctx.lineTo(430 + 50 + 100, 380);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.moveTo(430 + 25 + 100, 180);
	ctx.lineTo(430 + 200 + 100, 230);
	ctx.lineTo(430 + 220 + 100, 180);
	ctx.lineTo(430 + 45 + 100, 125);
	ctx.lineTo(430 + 25 + 100, 180);
	ctx.fill();
	ctx.closePath();
}
function draw() {
	drawButtonScissors();
	drawButtonHammer();
	drawButtonBag();
	drawButtonStart();
}
document.addEventListener('mousedown', function(e) {
	if (e.x > 254 && e.x < 356 && e.y > 24 && e.y < 76) {
		ctx.beginPath();
		ctx.fillStyle = 'cyan';
		ctx.fillRect(0, 80, 330, 350);
		playerDrawBag();
		ctx.closePath();
		player = 2;
	}
	if (e.x > 24 && e.x < 126 && e.y > 24 && e.y < 76) {
		ctx.beginPath();
		ctx.fillStyle = 'cyan';
		ctx.fillRect(0, 80, 330, 350);
		playerDrawScissors();
		ctx.closePath();
		player = 1;
	}
	if (e.x > 139 && e.x < 241 && e.y > 24 && e.y < 76) {
		ctx.beginPath();
		ctx.fillStyle = 'cyan';
		ctx.fillRect(0, 80, 330, 350);
		playerDrawHammer();
		ctx.closePath();
		player = 0;
	}
	if (e.x > 359 && e.x < 461 && e.y > 24 && e.y < 76) {
		loop();
		ComputerVSPlayer();
	}
});
function ComputerVSPlayer() {
	if (computer == player) {
		document.querySelector('#ketqua').innerText = 'Draw!';
	}
	else if (computer == 0 && player == 1) {
		document.querySelector('#ketqua').innerText = 'Lose!';
		live -= 1;
	}
	else if (computer == 1 && player == 0) {
		document.querySelector('#ketqua').innerText = 'Win!';
	}
	else if (computer == 0 && player == 2) {
		document.querySelector('#ketqua').innerText = 'Win!';
	}
	else if (computer == 2 && player == 0) {
		document.querySelector('#ketqua').innerText = 'Lose!';
		live -= 1;
	}
	else if (computer == 1 && player == 2) {
		document.querySelector('#ketqua').innerText = 'Lose!';
		live -= 1;
	}
	else if (computer == 2 && player == 1) {
		document.querySelector('#ketqua').innerText = 'Win!';
	}
	document.querySelector('#live').innerText = live;
}
function dien() {
	if (live == 1) {
		alert("GAMEOVER");
		alert("YOU LOSE");
		console.log("You lose!");
	}
}
function win() {
	if (score == 50) {
		alert("GAMEOVER");
		alert("YOU WIN");
		console.log("You win!");
	}
}
function ramdomComputerTools(tool){
	if (tool == 'AI') {
		var computer2 = Math.floor(Math.random() * 3);
		fillStyle = 'cyan';
		if (computer2 == 0) {
			ctx.beginPath();
			ctx.fillStyle = 'cyan';
			ctx.fillRect(450, 80, 340, 350);
			ctx.closePath();
			computerDrawHammer();
			computer = 0;
		}
		if (computer2 == 1) {
			ctx.fillStyle = 'cyan';
			ctx.fillRect(450, 80, 340, 350);
			computerDrawScissors();
			computer = 1;
		}
		if (computer2 == 2) {
			ctx.fillStyle = 'cyan';
			ctx.fillRect(450, 80, 340, 350);
			computerDrawBag();
			computer = 2;
		}
		score += 1;
		dien();
		win();
	}
	if (tool == 'Max') {
		var computer2 = Math.floor(Math.random() * 5);
		fillStyle = 'cyan';
		if (computer2 > -1 && computer2 < 3) {
			ctx.beginPath();
			ctx.fillStyle = 'cyan';
			ctx.fillRect(450, 80, 340, 350);
			ctx.closePath();
			computerDrawHammer();
			computer = 0;
		}
		if (computer2 == 3) {
			ctx.fillStyle = 'cyan';
			ctx.fillRect(450, 80, 340, 350);
			computerDrawScissors();
			computer = 1;
		}
		if (computer2 == 4) {
			ctx.fillStyle = 'cyan';
			ctx.fillRect(450, 80, 340, 350);
			computerDrawBag();
			computer = 2;
		}
		score += 1;
		dien();
		win();
	}
	if (tool == 'Leo') {
		var computer2 = Math.floor(Math.random() * 5);
		fillStyle = 'cyan';
		if (computer2 == 3) {
			ctx.beginPath();
			ctx.fillStyle = 'cyan';
			ctx.fillRect(450, 80, 340, 350);
			ctx.closePath();
			computerDrawHammer();
			computer = 0;
		}
		if (computer2 > -1 && computer2 < 3) {
			ctx.fillStyle = 'cyan';
			ctx.fillRect(450, 80, 340, 350);
			computerDrawScissors();
			computer = 1;
		}
		if (computer2 == 4) {
			ctx.fillStyle = 'cyan';
			ctx.fillRect(450, 80, 340, 350);
			computerDrawBag();
			computer = 2;
		}
		score += 1;
		dien();
		win();
	}
}
function loop() {
	if (doithu.value == 'AI') {
		ramdomComputerTools('AI');
	}
	if (doithu.value == 'Max') {
		ramdomComputerTools('Max');
	}
	if (doithu.value == 'Leo') {
		ramdomComputerTools('Leo');
	}
}
draw();
