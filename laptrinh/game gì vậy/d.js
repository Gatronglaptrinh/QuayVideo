c = document.getElementById('c');
ctx = c.getContext('2d');
con = document.getElementById('console').innerHTML;
document.getElementById('command').addEventListener('keydown', function(e) {
	if (e.key == "Enter") {
		gui();
	}
	console.log(e.key);
});
function gui() {
	s = new SIW(document.getElementById('command')).words;
	document.getElementById('command').innerHTML = '';
	if (s[0] == '//help') {
		con += '<div>//help</div><div>//rect [x] [y] [width] [height] [color] [typeDraw]</div>';
	}
	if (s[0] == '//rect') {
		if (s[6] == 'fill') {
			ctx.fillStyle = s[5];
			ctx.fillRect(Number(s[1]) * 10, Number(s[2]) * 10, Number(s[3]) * 10, Number(s[4]) * 10);
		} 
	}
}