function getOutPut(num) {
	if (document.getElementById('screen').innerHTML == '0') {
		document.getElementById('screen').innerHTML = String(num);
	} else {
		document.getElementById('screen').innerHTML += String(num);
	}
	if (document.getElementById('screen').innerHTML.substring(0, 1) == '0') {
		document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.substring(1, document.getElementById('screen').length);

	}
}
function opposite() {
	document.getElementById('screen').innerHTML = Number(document.getElementById('screen').innerHTML) * -1;
}
function getInPut(t) {
	document.getElementById('extra').innerHTML += document.getElementById('screen').innerHTML + t;
	document.getElementById('screen').innerHTML = '0';
}
num = document.getElementsByClassName('number');
for (let i = 0; i < num.length; i++) {
	num[i].onclick = function() {
		if (num[i].innerHTML == '0' || num[i].innerHTML == '1' || num[i].innerHTML == '2' || num[i].innerHTML == '3' || num[i].innerHTML == '4' || num[i].innerHTML == '5' || num[i].innerHTML == '6' || num[i].innerHTML == '7' || num[i].innerHTML == '8' || num[i].innerHTML == '9' || num[i].innerHTML == '.') {
			getOutPut(num[i].innerHTML);
		}
		else if (num[i].innerHTML == '+/-') {
			opposite();
		}
		
	}
}
ope = document.getElementsByClassName('operation');
for (let i = 0; i < ope.length; i++) {
	ope[i].onclick = function() {
		if (ope[i].innerHTML == '+' || ope[i].innerHTML == '-' || ope[i].innerHTML == 'x' || ope[i].innerHTML == ':') {
			getInPut(ope[i].innerHTML);
		}
	}
}
		