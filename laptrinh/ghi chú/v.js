a = document.getElementById('tennhiemvu');
b = document.getElementById('as');

function them() {
	b.innerHTML += '<button onclick="aa(this)" class="s"></button>' + a.value + '<button onclick=""><i class="fas fa-trash s"></i></button>'
}
function aa(t) {
	if (t.innerHTML == '') {
		t.innerHTML = '<i class="fas fa-check"></i>';
	}
	else {
		t.innerHTML = '';
	}
}