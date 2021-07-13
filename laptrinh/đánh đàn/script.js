var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = 200;
c.height = 600;
var f = 900;
var defenders = [];
var gameOver = false;
var defendersA = [];
var a = 33;
var u = 3;
var score = 200;
var s = false;
class Beat {
	constructor(x, s = 2) {
		this.x = x;
		this.y = -100;
		this.color = 'black';
		this.width = 50;
		this.height = 100;
		this.speed = s;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	update() {
		this.y += this.speed;
	}
}
function handleDefenders(){
	for (let i = 0; i < defenders.length; i++){
		defenders[i].draw();
		defenders[i].update();
		if (defenders[i].y + defenders[i].height > c.height){
			defenders[i].color = 'red';
			defenders[i].draw();
			gameOver = true;
		}
	}
	if(f % a === 0 && score < 100) {
		let x = Math.floor(Math.random() * 4) * 50;
		defenders.push(new Beat(x, u));
		defendersA.push(x);
		if (defendersA[defendersA.length-2] == defendersA[defendersA.length-1] && !defendersA[defendersA.length-2]) {
			defenders[defenders.length-1].x = Math.floor(Math.random() * 4) * 50;
		}
	}
	if (score >= 100 && f % 1000 == 0) {
		s = true;
	}
	if (score >= 100 && defenders.length == 0) {
		a = 20;
		u = 5;
	}
	if(f % a === 0 && s == true) {
		let x = Math.floor(Math.random() * 4) * 50;
		defenders.push(new Beat(x, u));
		defendersA.push(x);
		if (defendersA[defendersA.length-2] == defendersA[defendersA.length-1] && !defendersA[defendersA.length-2]) {
			defenders[defenders.length-1].x = Math.floor(Math.random() * 4) * 50;
		}
	}
}
c.addEventListener('mousedown', (e) => {
	if(collision(defenders[0], e)) {
		if (defenders[0].y <= 200) {
			score++;
		} else if (defenders[0].y <= 400 && defenders[0].y > 200) {
			score += 2;
		} else {
			score += 3;
		}
		defenders.shift();
		defendersA.shift();
	}
	else {
		gameOver = true;
		for (let i = 0; i < defenders.length; i++){
			defenders[i].color = 'red';
			defenders[i].draw();
		}
			
	}
})
function animation() {
	ctx.clearRect(0, 0, c.width, c.height);
	f++;
	handleDefenders();
	document.getElementById('a').innerHTML = score;
	if (!gameOver) {
		requestAnimationFrame(animation);
	}
}
animation();
function collision(first, e){
	if (first.x <= e.x && e.x <= first.x + first.width && first.y <= e.y && e.y <= first.y + first.height) {
		return true;
	}
};