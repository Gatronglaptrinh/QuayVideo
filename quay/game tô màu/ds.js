mau = "white";
function thaydoi(t) {
	mau = t.style.backgroundColor;
}
function them() {
	kq = '<table>';
	col = document.getElementById('col').value;
	row = document.getElementById('row').value;
	for (let i = 0; i < col; i++) {
		kq += '<tr>'
		for (let j = 0; j < row; j++) {
			kq += '<td><button style="background-color: white; width: 30px; height: 30px; border: 1px solid gray;" onmousedown="doimau(this)"></button></td>';
		}
		kq += '</tr>'
	}
	kq += '</table>';
	document.getElementById('hienthi').innerHTML = kq;
	kq = '<table>';
}
function doimau(t) {
	t.style.backgroundColor = mau;
}
// ok nha cám ơn mọi người nha
// mong mọi người like, đăng ký và chia sẻ nha
// tạm biệt