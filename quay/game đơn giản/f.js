// js tiep nha
luot = 'o';
function danh(th) {
	if (th.innerHTML == '') {
		if (luot == 'o') {
			th.innerHTML = 'o';
			luot = 'x';
		} else if (luot == 'x') {
			th.innerHTML = 'x';
			luot = 'o';
		}
	}
}
function them() {
	ketqua = new SIWS(document.getElementById('cr').value, 'x').words;
	//ok
	col = Number(ketqua[0]);
	row = Number(ketqua[1]);
	kq = '<table border="1" cellspacing="0" cellpadding="10">';
	for (let i = 0; i < col; i++) {
		kq += '<tr>';
		for (let j = 0; j < row; j++) {
			kq += '<td class="box" onclick="danh(this)"></td>';
		}
		kq += '</tr>';
	}
	kq += '</table>';
	document.getElementById('main').innerHTML = kq;
	kq = '<table border="1" cellspacing="0" cellpadding="10">';
}

// ok nha
// ok minh da lam xong tro choi don gian