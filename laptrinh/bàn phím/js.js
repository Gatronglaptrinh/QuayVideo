var c = document.getElementById('my');
var ctx = c.getContext('2d');
c.width = 1000;
c.height = 600;
moi = null;
var form_size = document.getElementById('form_size');
drawBackground('#ffffff');
var drawing = false;
color = '#000000';
size = 5;
tools = 'mouse';
oldimage = null;
newimage = null;
currentPos = {
	x: 0,
	y: 0
};
startPos = {
	x: 0,
	y: 0
};
function getMousePos(evt) {
	var rect = c.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}
document.getElementById('my').addEventListener('mousemove', function(e) {
	let mousePos = getMousePos(event);
	if (drawing) {
		switch(tools){
			case 'pen':
				pen_draw(mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(5)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(7)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(8)" class="sizebtn">
				`
			break;
			case 'pencil':
				pencil_draw(currentPos, mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(2)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				`
			break;
			case 'rect':
				undo();
				rect_draw(startPos, mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(2)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				`
			break;
			case 'mouse':
			break;
			case 'line':
				undo();
				pencil_draw(startPos, mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(2)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				`
			break;
			case 'triangle':
				undo();
				triangle_draw(startPos, mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(2)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				`
			break;
			case 'trianglengang':
				undo();
				triangle_draw_ngang(startPos, mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(2)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				`
			break;
			case 'star':
				undo();
				star_shape_draw(startPos, mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(2)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				`
			break;
			case 'thoi':
				undo();
				thoi_draw(startPos, mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(2)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				`
			break;
			case 'cicle':
				undo();
				cicle_draw(startPos ,mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(2)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				`
				if (moi <= 0) {
					moi = 0;
				}
			break;
			case 'eraser':
				eraser(mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(4)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				<input type="button" value="4" onclick="doisize(6)" class="sizebtn">
				<input type="button" value="5" onclick="doisize(7)" class="sizebtn">
				<input type="button" value="6" onclick="doisize(8)" class="sizebtn">
				`
			break;
			case 'text':
				undo();
				text_draw(mousePos);
				form_size.innerHTML = '';
			break;
			case 'pentagon':
				undo();
				pentagon_draw(startPos, mousePos);
				form_size.innerHTML = 
				`
				<input type="button" value="1" onclick="doisize(2)" class="sizebtn">
				<input type="button" value="2" onclick="doisize(3)" class="sizebtn">
				<input type="button" value="3" onclick="doisize(5)" class="sizebtn">
				`
			break;
		}
	}
	c.style.cursor = 'pointer';
	currentPos = mousePos;
});
c.addEventListener('mousedown', function(e) {
	saveme();
	let mousePos = getMousePos(event);
	startPos = getMousePos(event);
	drawing = true;
});
c.addEventListener('mouseup', function(e) {
	drawing = false;
});
function drawBackground(color){
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, c.width, c.height);
}