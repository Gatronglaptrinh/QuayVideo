var body = document.getElementById('body');
var lv1 = document.getElementById('level1');
kq = document.getElementById('input');
function playGame() {
	body.innerHTML = lv1.innerHTML;
}
function level(ketqua, level = lv1) {
	let text = kq.value;
	alert(text);
	if (text == ketqua) {
		body.innerHTML = level.innerHTML;
		alert('hello');
	} else {
		alert('hello me');
	}
}