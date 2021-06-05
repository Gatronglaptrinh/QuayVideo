var td = document.getElementsByTagName('td');
s = false;

function SIW(a) {
	b = 0;
	f = 0;
	c = [];
	d = 0;
	e = 0;
	t = 0;

	for (let i = 0; i < a.length; i++) {
		d = a[i];
		if (d == '*' || d == 'X' || d == 'x') {
			c[b] = a.substring(f, i);
			b++;
			f = i+1;
			a = a.substring(f, a.length);
			f = 0;
			d = 0;
			i = 0;
		}
	}

	c[b] = a;
	for (let i = 0; i < c.length-2; i++) {
		c.pop();
	}

	for (let i = 0; i < c.length; i++) {
		for (let j = 0; j < c[i].length; j++) {
			if (c[i][j] == "." || c[i][j] == "," || c[i][j] == ":" || c[i][j] == ";") {
				e++;
				break;
			}
		}
	}
	for (let i = 0; i < c.length; i++) {
		for (let j = 0; j < c[i].length; j++) {
			if (c[i][j] != c[i][j].toLowerCase()) {
				t++;
				break;
			}
		}
	}

	this.length = c.length;
	this.words = c;
	this.analysis = {
		strangeWord: e,
		capitalLetters: t
	}
}


function start() {
	let p = 0;
	let x = document.getElementById('t').value;
	for (let i = 0; i <= td.length-1; i++) {
		td[i].onclick = function() {
			if (td[i].innerText == "" && p == 0) {
				td[i].innerText = "X";
				p++;
				document.getElementById('pl').innerText = 'P' + p;
			} else if (td[i].innerText == "" && p == 1) {
				td[i].innerText = "O";
				p++;
				document.getElementById('pl').innerText = 'P' + p;
			} else if (td[i].innerText == "" && p == 2) {
				td[i].innerText = "C";
				p++;
				document.getElementById('pl').innerText = 'P' + p;
			} else if (td[i].innerText == "" && p == 3) {
				td[i].innerText = "A";
				p = 0;
				document.getElementById('pl').innerText = 'P4';
			}
			if (s) {
				td[i].style.backgroundColor = 'red';
			}
			if (p == x) {
				p = 0;
			}
		}
	}
}
function them() {
	kq = '<table border="1" cellpadding="5" cellspacing="0">';
	as = new SIW(document.getElementById('col').value);
	rol = as.words[0];
	col = as.words[1];

	for (var i = 0; i < col; i++) {
		kq += '<tr>';
		for (var j = 0; j < rol; j++) {
			kq += '<td></td>';
		}
		kq += '</tr>';
	}
	kq += '</table>';
	document.getElementById('bord').innerHTML = kq;
	kq = '';
}
function to() {
    if (!s) {
    	s = true;
    } else {
    	s = false;
    }
}