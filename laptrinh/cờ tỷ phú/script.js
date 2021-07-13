const c = document.getElementById('c');
const ctx = c.getContext('2d');
const oS = [
	[0,0,'','black','gray','Start'],
	[100,0,'40$','black','hotpink','Nguyễn\n Huệ'],
	[200,0,'','black','yellow','Khí Vận'],
	[300,0,'60$','black','hotpink','Lê Lợi'],
	[400,0,'200$','black','lightgray','Thuế'],
	[500,0,'200$','black','darkgray','Bến xe\n Bến Tre'],
	[600,0,'100$','black','brown','Lương\nĐình Của'],
	[700,0,'','black','yellow','Cơ hội'],
	[800,0,'100$','black','brown','Võ Thị\nSáu'],
	[900,0,'120$','black','brown','Hai Bà\nTrưng'],
	[1000,0,'140$','black','lightblue','Nguyễn\n Tất\nThành'],
	[1100,0,'200$','black','lightgray','Công Ty\nĐiện lực'],
	[1200,0,'','black','lightgray','Thăm tù']
]
function o(x, y, w, h, text, m, color, context) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
	ctx.fillStyle = m;
	ctx.font = '15px Arial';
	ctx.fillText(text, x+w/3, y+h/10*9);
	ctx.font = '20px Arial';
	let lineheight = 25;
	let lines = context.split('\n');
	for (let i = 0; i<lines.length; i++) {
    	ctx.fillText(lines[i], x+w/10, y+h/10*2 + (i*lineheight));
    }
}
function veO() {
	for (let i = 0; i < oS.length; i++) {
		o(oS[i][0], oS[i][1], 100, 100, oS[i][2], oS[i][3], oS[i][4], oS[i][5]);
	}
}
function animation() {
	ctx.clearRect(0,0,c.width,c.height);
	veO();
	requestAnimationFrame(animation);
}
animation();