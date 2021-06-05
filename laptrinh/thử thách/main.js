var c = document.getElementById('my');
var ctx = c.getContext('2d');
c.width = 1000;
c.height = 500;
var w = document.getElementById('wi');
var h = document.getElementById('he');
color = 'black';
function getMousePos(evt) {
	var rect = c.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}
c.addEventListener('mousemove', function(e) {
	let mousePos = getMousePos(event);
	c.style.cursor = 'pointer';
	w.innerHTML = mousePos.x;
	h.innerHTML = mousePos.y;
});
$('#mytab').tabs({
	collapsible: true,
	event: 'mousedown'
});
function doiMau(colorpicker) {
	color = colorpicker;
}