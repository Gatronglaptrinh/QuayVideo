var nhap = document.getElementById('nhap');
var cu = document.getElementById('cu');
pt = null;
a = null;
b = null;
function caculator(obj) {
	type = obj.innerHTML;
	if (type == '0' || type == '1' || type == '2' || type == '3' || type == '4' || type == '5' ||
		type == '6' || type == '7' || type == '8' || type == '9') {
		if (nhap.value == "0") {
			nhap.value = type;
		}
		else {
			nhap.value += type;
		}

	}
	else if (type == '.') {
		nhap.value += type;
	}
	else if (type == '+/-') {
		nhap.value = Number(nhap.value) * -1;
	}
	else if (type == '+' || type == '-' || type == 'x' || type == '/') {
		pt = type;
		a = Number(nhap.value);
		cu.value = a + pt;
		nhap.value = "0";
	}
	else if (type == 'CE') {
		nhap.value = "0";
	}
	else if (type == "C") {
		nhap.value = "0";
		cu.value = "";
		a = 0;
		pt = "";
	}
	else if (type == '&lt;--') {
		nhap.value = nhap.value.substr(0, nhap.value.length-1);
	}
	else if (type == '=') {
		b = Number(nhap.value);
		nhap.value = "0";
		switch (pt) {
			case "+":
				nhap.value = a + b;
			break;
			case "-":
				nhap.value = a - b;
			break;
			case "x":
				nhap.value = a * b;
			break;
			case "/":
				nhap.value = a / b;
			break;
		}
		
		cu.value = "";
		a = null;
		b = null;
		pt = null;
	}
}
// thử nha
// ok
// ok
// xin loi minh quen bam nut nen có mot so thu minh da lam