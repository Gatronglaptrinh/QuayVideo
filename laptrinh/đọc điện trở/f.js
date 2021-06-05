var color = {
	black: ["0", "1", ""],
	brown: ["1", "10", "±1%"],
	red: ["2", "100", "±2%"],
	orange: ["3", "1000", ""],
	yellow: ["4", "10000", ""],
	green: ["5", "100000", "±0.5%"],
	blue: ["6", "1000000", "±0.25%"],
	purple: ["7", "10000000", "±0.1%"],
	gray: ["8", "", "±0.05%"],
	white: ["9", "", ""],
	gold: ["", "0.1", "±5%"],
	silver: ["", "0.01", "±10%"],
	emtry: ["", "", "±20%"]
}
function doc() {
	input = document.getElementsByClassName('input');
	hienthi = document.getElementsByClassName('hienthi');
	kq = document.getElementById('kq');
	ketqua = "";
	if (input[4].value != "") {
		for (let i = 0; i < 3; i++) {
			if (input[i].value == 'đen') {
				ketqua += color.black[0];
			}
			if (input[i].value == 'nâu') {
				ketqua += color.brown[0];
			}
			if (input[i].value == 'đỏ') {
				ketqua += color.red[0];
			}
			if (input[i].value == 'cam') {
				ketqua += color.orange[0];
			}
			if (input[i].value == 'vàng') {
				ketqua += color.yellow[0];
			}
			if (input[i].value == 'xanh lá') {
				ketqua += color.green[0];
			}
			if (input[i].value == 'xanh biển') {
				ketqua += color.blue[0];
			}
			if (input[i].value == 'tím') {
				ketqua += color.purple[0];
			}
			if (input[i].value == 'xám') {
				ketqua += color.gray[0];
			}
			if (input[i].value == 'trắng') {
				ketqua += color.white[0];
			}
			if (input[i].value == 'vàng kim') {
				ketqua += color.gold[0];
			}
			if (input[i].value == 'bạc') {
				ketqua += color.silver[0];
			}
		}
		if (input[3].value == 'đen') {
			ketqua = Number(ketqua) * Number(color.black[1]);
		}
		if (input[3].value == 'nâu') {
			ketqua = Number(ketqua) * Number(color.brown[1]);
		}
		if (input[3].value == 'đỏ') {
			ketqua = Number(ketqua) * Number(color.red[1]);
		}
		if (input[3].value == 'cam') {
			ketqua = Number(ketqua) * Number(color.orange[1]);
		}
		if (input[3].value == 'vàng') {
			ketqua = Number(ketqua) * Number(color.yellow[1]);
		}
		if (input[3].value == 'xanh lá') {
			ketqua = Number(ketqua) * Number(color.green[1]);
		}
		if (input[3].value == 'xanh biển') {
			ketqua = Number(ketqua) * Number(color.blue[1]);
		}
		if (input[3].value == 'tím') {
			ketqua = Number(ketqua) * Number(color.purple[1]);
		}
		if (input[3].value == 'xám') {
			ketqua = Number(ketqua) * Number(color.gray[1]);
		}
		if (input[3].value == 'trắng') {
			ketqua = Number(ketqua) * Number(color.white[1]);
		}
		if (input[3].value == 'vàng kim') {
			ketqua = Number(ketqua) * Number(color.gold[1]);
		}
		if (input[3].value == 'bạc') {
			ketqua = Number(ketqua) * Number(color.silver[1]);
		}

		if (input[4].value == 'đen') {
			ketqua += color.black[2];
		}
		if (input[4].value == 'nâu') {
			ketqua += color.brown[2];
		}
		if (input[4].value == 'đỏ') {
			ketqua += color.red[2];
		}
		if (input[4].value == 'cam') {
			ketqua += color.orange[2];
		}
		if (input[4].value == 'vàng') {
			ketqua += color.yellow[2];
		}
		if (input[4].value == 'xanh lá') {
			ketqua += color.green[2];
		}
		if (input[4].value == 'xanh biển') {
			ketqua += color.blue[2];
		}
		if (input[4].value == 'tím') {
			ketqua += color.purple[2];
		}
		if (input[4].value == 'xám') {
			ketqua += color.gray[2];
		}
		if (input[4].value == 'trắng') {
			ketqua += color.white[2];
		}
		if (input[4].value == 'vàng kim') {
			ketqua += color.gold[2];
		}
		if (input[4].value == 'bạc') {
			ketqua += color.silver[2];
		}
		kq.innerHTML = ketqua + "Ohm(Ω)";
	}
	if (input[4].value == "") {
		for (let i = 0; i < 2; i++) {
			if (input[i].value == 'đen') {
				ketqua += color.black[0];
			}
			if (input[i].value == 'nâu') {
				ketqua += color.brown[0];
			}
			if (input[i].value == 'đỏ') {
				ketqua += color.red[0];
			}
			if (input[i].value == 'cam') {
				ketqua += color.orange[0];
			}
			if (input[i].value == 'vàng') {
				ketqua += color.yellow[0];
			}
			if (input[i].value == 'xanh lá') {
				ketqua += color.green[0];
			}
			if (input[i].value == 'xanh biển') {
				ketqua += color.blue[0];
			}
			if (input[i].value == 'tím') {
				ketqua += color.purple[0];
			}
			if (input[i].value == 'xám') {
				ketqua += color.gray[0];
			}
			if (input[i].value == 'trắng') {
				ketqua += color.white[0];
			}
			if (input[i].value == 'vàng kim') {
				ketqua += color.gold[0];
			}
			if (input[i].value == 'bạc') {
				ketqua += color.silver[0];
			}
		}
		if (input[2].value == 'đen') {
			ketqua = Number(ketqua) * Number(color.black[1]);
		}
		if (input[2].value == 'nâu') {
			ketqua = Number(ketqua) * Number(color.brown[1]);
		}
		if (input[2].value == 'đỏ') {
			ketqua = Number(ketqua) * Number(color.red[1]);
		}
		if (input[2].value == 'cam') {
			ketqua = Number(ketqua) * Number(color.orange[1]);
		}
		if (input[2].value == 'vàng') {
			ketqua = Number(ketqua) * Number(color.yellow[1]);
		}
		if (input[2].value == 'xanh lá') {
			ketqua = Number(ketqua) * Number(color.green[1]);
		}
		if (input[2].value == 'xanh biển') {
			ketqua = Number(ketqua) * Number(color.blue[1]);
		}
		if (input[2].value == 'tím') {
			ketqua = Number(ketqua) * Number(color.purple[1]);
		}
		if (input[2].value == 'xám') {
			ketqua = Number(ketqua) * Number(color.gray[1]);
		}
		if (input[2].value == 'trắng') {
			ketqua = Number(ketqua) * Number(color.white[1]);
		}
		if (input[2].value == 'vàng kim') {
			ketqua = Number(ketqua) * Number(color.gold[1]);
		}
		if (input[2].value == 'bạc') {
			ketqua = Number(ketqua) * Number(color.silver[1]);
		}

		if (input[3].value == 'đen') {
			ketqua += color.black[2];
		}
		if (input[3].value == 'nâu') {
			ketqua += color.brown[2];
		}
		if (input[3].value == 'đỏ') {
			ketqua += color.red[2];
		}
		if (input[3].value == 'cam') {
			ketqua += color.orange[2];
		}
		if (input[3].value == 'vàng') {
			ketqua += color.yellow[2];
		}
		if (input[3].value == 'xanh lá') {
			ketqua += color.green[2];
		}
		if (input[3].value == 'xanh biển') {
			ketqua += color.blue[2];
		}
		if (input[3].value == 'tím') {
			ketqua += color.purple[2];
		}
		if (input[3].value == 'xám') {
			ketqua += color.gray[2];
		}
		if (input[3].value == 'trắng') {
			ketqua += color.white[2];
		}
		if (input[3].value == 'vàng kim') {
			ketqua += color.gold[2];
		}
		if (input[3].value == 'bạc') {
			ketqua += color.silver[2];
		}
		kq.innerHTML = ketqua + "Ohm(Ω)";
	}
}