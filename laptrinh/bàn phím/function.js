function triangle_draw(startPos, endPos) {
	width = endPos.x - startPos.x;
	height = endPos.y - startPos.y;
	ctx.beginPath();
	ctx.lineWidth = size;
	ctx.strokeStyle = color;
	ctx.moveTo(startPos.x + width / 2, startPos.y);
	ctx.lineTo(startPos.x + width, startPos.y + height);
	ctx.lineTo(startPos.x, startPos.y + height);
	ctx.lineTo(startPos.x + width / 2, startPos.y);
	ctx.stroke();
	ctx.closePath();
}
function star_shape_draw(startPos, endPos) {
	width = endPos.x - startPos.x;
	height = endPos.y - startPos.y;
	ctx.beginPath();
	ctx.lineWidth = size;
	ctx.strokeStyle = color;
	ctx.moveTo(startPos.x + width / 2, startPos.y);
	ctx.lineTo(startPos.x + width / 8 * 5, startPos.y + height / 5 * 2);
	ctx.lineTo(startPos.x + width, startPos.y + height / 5 * 2);
	ctx.lineTo(startPos.x + width / 8 * 6, startPos.y + height / 5 * 3);
	ctx.lineTo(startPos.x + width / 8 * 7, startPos.y + height);
	ctx.lineTo(startPos.x + width / 2, startPos.y + height / 5 * 4);
	ctx.lineTo(startPos.x + width / 8, startPos.y + height);
	ctx.lineTo(startPos.x + width / 8 * 2.5, startPos.y + height / 5 * 3);
	ctx.lineTo(startPos.x + width / 8, startPos.y + height / 5 * 2);
	ctx.lineTo(startPos.x + width / 9 * 3, startPos.y + height / 5 * 2);
	ctx.lineTo(startPos.x + width / 2, startPos.y);
	ctx.stroke();
	ctx.closePath();
}
function triangle_draw_ngang(startPos, endPos) {
	width = endPos.x - startPos.x;
	height = endPos.y - startPos.y;
	ctx.beginPath();
	ctx.lineWidth = size;
	ctx.strokeStyle = color;
	ctx.moveTo(startPos.x + width, startPos.y);
	ctx.lineTo(startPos.x + width, startPos.y + height);
	ctx.lineTo(startPos.x, startPos.y + height);
	ctx.lineTo(startPos.x + width, startPos.y);
	ctx.stroke();
	ctx.closePath();
}
function thoi_draw(startPos, endPos) {
	width = endPos.x - startPos.x;
	height = endPos.y - startPos.y;
	ctx.beginPath();
	ctx.lineWidth = size;
	ctx.strokeStyle = color;
	ctx.moveTo(startPos.x + width / 2, startPos.y);
	ctx.lineTo(startPos.x + width, startPos.y + height / 2);
	ctx.lineTo(startPos.x + width / 2, startPos.y + height);
	ctx.lineTo(startPos.x, startPos.y / 2);
	ctx.lineTo(startPos.x + width / 2, startPos.y);
	ctx.stroke();
	ctx.closePath();
}
function pen_draw(startPos) {
	ctx.beginPath();
	ctx.lineWidth = size;
	ctx.fillStyle = color;
	ctx.arc(startPos.x , startPos.y, size, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
}
function pencil_draw(startPos, endPos) {
	ctx.lineWidth = size;
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(startPos.x, startPos.y);
		ctx.lineTo(endPos.x, endPos.y);
		ctx.stroke();
}
function saveme(){
		oldimage = new Image;
		oldimage.src = c.toDataURL("image/bnd", 1.0);
}
function undo(){
	newimage = new Image;
	newimage.src = c.toDataURL("image/bnd", 1.0);
	ctx.drawImage(oldimage, 0, 0, c.width, c.height);
}

function redo(){
	ctx.drawImage(newimage, 0, 0, c.width, c.height);
}
function cicle_draw(startPos, endPos) {
	ctx.beginPath();
	ctx.lineWidth = size;
	ctx.strokeStyle = color;
	ctx.arc(startPos.x, startPos.y, moi, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.closePath();
	moi = endPos.x - startPos.x && endPos.y - startPos.y;
}
function eraser(startPos) {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.rect(startPos.x, startPos.y, size * 3, size * 3);
	ctx.fill();
	ctx.closePath();
}
function rect_draw(startPos, endPos) {
	ctx.beginPath();
	ctx.lineWidth = size;
	ctx.strokeStyle = color;
	ctx.rect(startPos.x, startPos.y, endPos.x - startPos.x, endPos.y - startPos.y);
	ctx.stroke();
	ctx.closePath();
}
function pentagon_draw(startPos, endPos) {
	width = endPos.x - startPos.x;
	height = endPos.y - startPos.y;
	ctx.lineWidth = size;
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(startPos.x + width / 4 * 2, startPos.y);
	ctx.lineTo(startPos.x + width, startPos.y + height / 3 * 2);
	ctx.lineTo(startPos.x + width / 5 * 4, startPos.y + height);
	ctx.lineTo(startPos.x + width / 5 * 2, startPos.y + height);
	ctx.lineTo(startPos.x + width / 5 * 1, startPos.y + height / 3 * 2);
	ctx.lineTo(startPos.x + width / 2, startPos.y);
	ctx.stroke();
}
function draw_hinh(startPos) {
	ctx.strokeStyle = 'gray';
	ctx.beginPath();
	ctx.moveTo(startPos.x, startPos.y + 20);
	ctx.lineTo(startPos.x, startPos.y - 40);
	ctx.closePath();
}