var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = 1300;
c.height = 600;
const num = [
	'A','2','3','4','5','6','7','8','9','10','J','Q','K'
];
const cha = [
	['b','black'],['c','black'],['r','red'],['c','red']
]
class Bai {
	constructor(x, y, n, color, color2, chat, width, height) {
		this.x = x;
		this.y = y;
		this.number = n;
		this.color = color;
		this.color2 = color2;
		this.chat = chat;
		this.width = width;
		this.height = height;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = this.color2;
		ctx.font = '20px arial';
		ctx.fillText(this.number, this.x + 5, this.y + 25);
		ctx.fillText(this.number, this.width - 15, this.height - 15);
		ctx.fillText(this.chat, this.x + 5, this.y + 50);
		ctx.fillText(this.chat, this.width - 15, this.height - 35);
		if (this.number == 'A') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 2);
		}
		if (this.number == '2') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 4 * 3 + 25);
		}
		if (this.number == '3') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 2);
		}
		if (this.number == '4') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 + 25);
		}
		if (this.number == '5') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 2);
		}
		if (this.number == '6') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 2);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 2);
		}
		if (this.number == '7') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 2);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 2);
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 4 + 20);
		}
		if (this.number == '8') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 2);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 2);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 + 20);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 + 20);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 - 20);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 - 20);
		}
		if (this.number == '9') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 2);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 2);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 + 20);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 + 20);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 - 20);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 - 20);
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 4 + 20);
		}
		if (this.number == '10') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 + 25);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 2);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 2);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 + 20);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 + 20);
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 * 3 - 20);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 - 20);
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 4 + 20);
			ctx.fillText(this.chat, this.x + this.width / 2 - 5, this.y + this.height / 4 * 3 - 20);
		}
		if (this.number == 'J' || this.number == 'Q' || this.number == 'K') {
			ctx.fillStyle = this.color2;
			ctx.font = '50px arial';
			ctx.fillText(this.chat, this.x + this.width / 4 - 5, this.y + this.height / 4 - 10);
			ctx.fillText(this.chat, this.x + this.width / 4 * 3 - 5, this.y + this.height / 4 * 3 + 25);
		}
	}
}
let b = Math.floor(Math.random() * num.length);
let cs = Math.floor(Math.random() * cha.length);
a = new Bai(0, 0, num[b], 'white', cha[cs][1], cha[cs][0], 150, 200);
function animation() {
	ctx.clearRect(0, 0, c.width, c.height);
	a.draw();
	requestAnimationFrame(animation);
}
animation();