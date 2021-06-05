color = 'red';
function doiMau(colorpi) {
	color = colorpi;
}
function tomau(thiss) {
	thiss.style.backgroundColor = color;
}
function them(col, rol) {
	if (isNaN(col)) {
		col = 5;
	} else if (isNaN(rol)) {
		rol = 5;
	}
	kq = '<table>';
	for (var i = 0; i < col; i++) {
		kq += '<tr>';
		for (var j = 0; j < rol; j++) {
			kq += '<td><button style="background-color: white;" class="btn" onclick="tomau(this)"></button></td>';
		}
		kq += '</tr>';
	}
	kq += '</table>';
	document.getElementById('board').innerHTML = kq;
}