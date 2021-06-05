var what1 = 0;
var what2 = 0;
var what3 = 0;
var num = new Number();
var html5 = document.getElementById("html5");
var css3 = document.getElementById("css3");
var js = document.getElementById("js");
function themha() {
	document.getElementById("themvao1").innerHTML = html5.value;
	document.getElementById("themvao2").innerHTML = css3.value;
	document.getElementById("themvao3").innerHTML = js.value;
}
html5.addEventListener('keyup', function(e) {
	if (e.which == 17 && what1 == 4 - 4) {
		html5.style.color = 'white';
		html5.style.backgroundColor = 'black';
		what1++;
	}
	else if (e.which == 17 && what1 == 5 - 4) {
		html5.style.color = 'black';
		html5.style.backgroundColor = 'white';
		what1 = 0;
	}
});
css3.addEventListener('keyup', function(e) {
	if (e.which == 17 && what2 == 4 - 4) {
		css3.style.color = 'white';
		css3.style.backgroundColor = 'black';
		what2++;
	}
	else if (e.which == 17 && what2 == 5 - 4) {
		css3.style.color = 'black';
		css3.style.backgroundColor = 'white';
		what2 = 0;
	}
});
js.addEventListener('keyup', function(e) {
	if (e.which == 17 && what3 == 0) {
		js.style.color = 'white';
		js.style.backgroundColor = 'black';
		what3++;
	}
	else if (e.which == 17 && what3 == 1) {
		js.style.color = 'black';
		js.style.backgroundColor = 'white';
		what3 = 0;
	}
});
var thehtml = document.getElementById("thehtml");
var thecss = document.getElementById("thecss");
var thejs = document.getElementById("thejs");
function thehtml5() {
	if (thehtml.value == "input") {
		html5.value += "<" + thehtml.value + ' type="" ' + "/>";
	} else if (thehtml.value == "br") {
		html5.value += "<" + thehtml.value + "/>";
	} else if (thehtml.value == "link") {
		html5.value += "<" + thehtml.value + ' rel="stylesheet"' + ' type="text/css"' + ' href=""' + "/>";
	} else if (thehtml.value == "img") {
		html5.value += "<" + thehtml.value + ' src=""' + "/>";
	} else if (thehtml.value == "script.src") {
		html5.value += "<" + "script" + ' src=""' + ">" + "</" + "script" + ">";
	} else if (thehtml.value == "script.type") {
		html5.value += "<" + "script" + ' type="text/javascript"' + ">" + "</" + "script" + ">";
	} else if (thehtml.value == "style") {
		html5.value += "<" + thehtml.value + ' type="text/css"' + ">" + "</" + thehtml.value + ">";
	} else if (!isNaN(thehtml.value)) {
		html5.value += "";
	}
	else {
		html5.value += "<" + thehtml.value + ">" + "</" + thehtml.value + ">";
	}
}
function thecss3() {
	if (thecss.value == 'id') {
		css3.value += "# " + "{}";
	} else if (thecss.value == 'class') {
		css3.value += ". " + "{}";
	} else if (thecss.value == 'var') {
		css3.value += ":root " + "{}";
	} else if (thecss.value == 'var.uses') {
		css3.value += "var" + "()";
	}
	else {
		css3.value += thecss.value + ": ;";
	}
}
var thuvien = document.getElementById("thuvien");
function thejs1() {
	if (thuvien.value == 'canvas.2d') {
		if (thejs.value == 'var') {
			js.value += 'var ;'
		} else if (thejs.value == 'fun') {
			js.value += 'function function_name(argument) {}';
		} else if (thejs.value == 'let') {
			js.value += 'let ;';
		} else if (thejs.value == 'const') {
			js.value += 'const ;';
		} else if (thejs.value == 'class') {
			js.value += thejs.value + ' class_name {}';
		} else if (thejs.value == 'return') {
			js.value += 'return ;';
		} else if (thejs.value == 'docu') {
			js.value += 'document. ;';
		} else if (thejs.value == 'get.tagname') {
			js.value += 'getElementsByTagName("")';
		} else if (thejs.value == 'get.id') {
			js.value += 'getElementById("")';
		} else if (thejs.value == '//') {
			js.value += '//';
		} else if (thejs.value == 'alert') {
			js.value += 'alert()';
		} else if (thejs.value == 'console') {
			js.value += 'console.log();';
		} else if (thejs.value == 'if') {
			js.value += 'if (true) {}';
		} else if (thejs.value == 'ife') {
			js.value +='if (true) {} else {}';
		} else if (thejs.value == 'if.full') {
			js.value +='if (true) {} else if () {} else {}';
		} else if (thejs.value == 'if') {
			js.value +='if (true) {}'
		} else if (thejs.value == 'switch') {
			js.value += 'switch () {}';
		} else if (thejs.value == 'case') {
			js.value += 'case : {}';
		} else if (thejs.value == 'case.full') {
			js.value += 'case : { break;}';
		} else if (thejs.value == 'default') {
			js.value += 'default : {}';
		} else if (thejs.value == "switch.full") {
			js.value += 'switch() {} case: {} default : {}';
		} else if (thejs.value == "canvas") {
			js.value += 'canvas = document.getElementById("");ctx = this.canvas.getContext("2d");';
		} else if (thejs.value == "get.context") {
			js.value += 'getContext("");';
		}
		else {
			js.value += thejs.value;
		}
	}
	else {
		if (thejs.value == 'var') {
			js.value += 'var ;'
		} else if (thejs.value == 'fun') {
			js.value += 'function function_name(argument) {}';
		} else if (thejs.value == 'let') {
			js.value += 'let ;';
		} else if (thejs.value == 'const') {
			js.value += 'const ;';
		} else if (thejs.value == 'class') {
			js.value += thejs.value + ' class_name {}';
		} else if (thejs.value == 'return') {
			js.value += 'return ;';
		} else if (thejs.value == 'docu') {
			js.value += 'document. ;';
		} else if (thejs.value == 'get.tagname') {
			js.value += 'getElementsByTagName("")';
		} else if (thejs.value == 'get.id') {
			js.value += 'getElementById("")';
		} else if (thejs.value == '//') {
			js.value += '//';
		} else if (thejs.value == 'alert') {
			js.value += 'alert()';
		} else if (thejs.value == 'console') {
			js.value += 'console.log();';
		} else if (thejs.value == 'if') {
			js.value += 'if (true) {}';
		} else if (thejs.value == 'ife') {
			js.value +='if (true) {} else {}';
		} else if (thejs.value == 'if.full') {
			js.value +='if (true) {} else if () {} else {}';
		} else if (thejs.value == 'if') {
			js.value +='if (true) {}'
		} else if (thejs.value == 'switch') {
			js.value += 'switch () {}';
		} else if (thejs.value == 'case') {
			js.value += 'case : {}';
		} else if (thejs.value == 'case.full') {
			js.value += 'case : { break;}';
		} else if (thejs.value == 'default') {
			js.value += 'default : {}';
		} else if (thejs.value == "switch.full") {
			js.value += 'switch() {} case: {} default : {}';
		}
		else {
			js.value += thejs.value;
		}
	}
}