var span = document.getElementsByTagName('span');
var id;
ms = 0;
s = 0;
function start() {
	clearInterval(id);
	id = setInterval(function() {
		ms++;
		if (ms < 9) {
			span[2].innerHTML = "0" + ms;
		}
		if (ms > 9) {
			span[2].innerHTML = ms;
		}
		if (ms >= 99) {
			if (s < 9) {
				s++;
				ms = 0;
				span[1].innerHTML = "0" + s;
			}
			if (s >= 9) {
				s++;
				ms = 0;
				span[1].innerHTML = s;
			}
		}
	}, 10);
}
function stop() {
	clearInterval(id);
}
function reset() {
	clearInterval(id);
    ms = "00";
    s = "00";
    span[2].innerHTML = ms;
    span[1].innerHTML = s;
}