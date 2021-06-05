var colorText = document.getElementById('mautext');
var text = document.getElementById('noidung');
var sizeText = document.getElementById('so');
var kieu = document.getElementById('kieu');
function text_draw(startPos) {
	ctx.beginPath();
	ctx.fillStyle = colorText.value;
	ctx.font = sizeText.value + 'px' + ' ' + kieu.value;
	ctx.fillText(text.value, startPos.x, startPos.y);
	ctx.closePath();
}