textEditor.document.designMode = 'On';
var showCode = false;
var edit = true;
function Cmd(cmd) {
	textEditor.document.execCommand(cmd, false, null);
}
function CmdSize(cmd, size) {
	textEditor.document.execCommand(cmd, false, size);
}
function ToggleA() {
	if (showCode) {
		textEditor.document.getElementsByTagName('body')[0].innerHTML = textEditor.document.getElementsByTagName('body')[0].textContent;
		showCode = false;
	}
	else {
		textEditor.document.getElementsByTagName('body')[0].textContent = textEditor.document.getElementsByTagName('body')[0].innerHTML;
		showCode = true;
	}
}
function ToggleB() {
	if (edit) {
		textEditor.document.designMode = 'off';
		edit = false;
	}
	else {
		textEditor.document.designMode = 'on';
		edit = true;
	}
}
		