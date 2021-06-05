a = true;
function khung(x, y) {
	ctx.fillStyle = 'lightgray';
	ctx.fillRect(x, y, 170, 230);
}
function def(x, y, mau, color) {
	ctx.fillStyle = color;
    ctx.fillRect(x, y, 94, 94);
    ctx.fillStyle = 'gold';
    ctx.font = '30px Orbitron';
    ctx.fillText(mau, x + 15, y + 30);
}
function bom(x, y, mau, color) {
	ctx.fillStyle = color;
    ctx.fillRect(x, y / 2, 94, 44);
    ctx.fillStyle = 'gold';
    ctx.font = '30px Orbitron';
    ctx.fillText(mau, x + 15, y / 2 + 30);
}
function text(context, x, y) {
	ctx.fillStyle = 'black';
    ctx.font = '16px Orbitron';
    ctx.fillText(context, x + 15, y + 30);
}
function defe() {
	khung(0, 0);
	def(5, 5, 100, 'blue');
	text('máu: 100', 2, 85);
	text('tốc độ bắn: 0.1s', 2, 100);
	text('sức mạnh: 20', 2, 115);
	text('kỹ năng: không có', 2, 130);
	text('tiền mua: 100', 2, 145);
	text('cấp độ: C - khá yếu', 2, 160);
	text('tên: súng lục', 2, 175)
}
function defl() {
	khung(900, 0);
	def(905, 5, 100, 'cyan');
	text('máu: 100', 902, 85);
	text('tốc độ bắn: 0.005s', 902, 100);
	text('sức mạnh: 2', 902, 115);
	text('kỹ năng: bắn nhanh', 902, 130);
	text('tiền mua: 200', 902, 145);
	text('cấp độ: A - tốt', 902, 160);
	text('tên: súng liên thanh', 902, 175)
}
function defx() {
	khung(1080, 0);
	def(1085, 5, 100, 'lightblue');
	text('máu: 100', 1082, 85);
	text('tốc độ bắn: 0.1s', 1082, 100);
	text('sức mạnh: 1', 1082, 115);
	text('kỹ năng: bắn xiên', 1082, 130);
	text('tiền mua: 150', 1082, 145);
	text('cấp độ: A - tốt', 1082, 160);
	text('tên: súng xiên giáp', 1082, 175)
}
function arm() {
	khung(540, 0);
	def(545, 5, 5000, 'green');
	text('máu: 5000', 542, 85);
	text('tốc độ bắn: không có', 542, 100);
	text('sức mạnh: không có', 542, 115);
	text('kỹ năng: ngăn cản', 542, 130);
	text('tiền mua: 150', 542, 145);
	text('cấp độ: B - khá tốt', 542, 160);
	text('tên: lá chắn', 542, 175)
}
function arg() {
	khung(720, 0);
	def(725, 5, 2500, 'lightgreen');
	text('máu: 2500', 722, 85);
	text('tốc độ: siêu nhanh', 722, 100);
	text('sức mạnh: 100/1s', 722, 115);
	text('kỹ năng: công và phủ', 722, 130);
	text('tiền mua: 300', 722, 145);
	text('cấp độ: A - tốt', 722, 160);
	text('tên: lá chắn gai', 722, 175)
}
function flo() {
	khung(180, 0);
	def(185, 5, 100, 'orange');
	text('máu: 100', 182, 85);
	text('tốc độ tạo tiền: 1s', 182, 100);
	text('sức mạnh: không có', 182, 115);
	text('kỹ năng: tạo thêm tiền', 182, 130);
	text('tiền mua: 50', 182, 145);
	text('cấp độ: B - khá tốt', 182, 160);
	text('tên: xưởng tiền', 182, 175)
}
function boms() {
	khung(360, 0);
	bom(365, 5, 1, 'yellow');
	text('máu: 1', 362, 85);
	text('tốc độ: không có', 362, 100);
	text('sức mạnh: 5', 362, 115);
	text('kỹ năng: ngưng động', 362, 130);
	text('tiền mua: 50', 362, 145);
	text('cấp độ: A - tốt', 362, 160);
	text('tên: bom ngầm', 362, 175)
}
function th() {
	khung(0, 240);
	def(5, 5 + 240, 100, 'red');
	text('máu: 100', 2, 85 + 240);
	text('tốc độ: 0.4 - 0.7s', 2, 100 + 240);
	text('sức mạnh: 1', 2, 115 + 240);
	text('kỹ năng: không có', 2, 130 + 240);
	text('xuất hiện: > 0 điểm', 2, 145 + 240);
	text('cấp độ: C - khá yếu', 2, 160 + 240);
	text('tên: lính', 2, 175 + 240);
}
function tt() {
	khung(180, 240);
	def(185, 5 + 240, 200, 'red');
	text('máu: 200', 182, 85 + 240);
	text('tốc độ: 0.4 - 0.7s', 182, 100 + 240);
	text('sức mạnh: 1', 182, 115 + 240);
	text('kỹ năng: không có', 182, 130 + 240);
	text('xuất hiện: > 2000 điểm', 182, 145 + 240);
	text('cấp độ: C - khá yếu', 182, 160 + 240);
	text('tên: lính giáp', 182, 175 + 240)
}
function ts() {
	khung(360, 240);
	def(365, 5 + 240, 100, 'red');
	text('máu: 100', 362, 85 + 240);
	text('tốc độ: 1 - 4s', 362, 100 + 240);
	text('sức mạnh: 1', 362, 115 + 240);
	text('kỹ năng: không có', 362, 130 + 240);
	text('xuất hiện: > 3000 điểm', 362, 145 + 240);
	text('cấp độ: C - khá yếu', 362, 160 + 240);
	text('tên: lính ngựa', 362, 175 + 240);
}
function tm() {
	khung(540, 240);
	def(545, 5 + 240, 100, 'red');
	text('máu: 100', 542, 85 + 240);
	text('tốc độ: 0.4 - 0.7s', 542, 100 + 240);
	text('sức mạnh: 5', 542, 115 + 240);
	text('kỹ năng: không có', 542, 130 + 240);
	text('xuất hiện: > 5000 điểm', 542, 145 + 240);
	text('cấp độ: C - khá yếu', 542, 160 + 240);
	text('tên: lính kiếm', 542, 175 + 240);
}
function ttl() {
	khung(720, 240);
	def(725, 5 + 240, 150, 'red');
	text('máu: 150', 722, 85 + 240);
	text('tốc độ: 0.2 - 0.3s', 722, 100 + 240);
	text('sức mạnh: 1', 722, 115 + 240);
	text('kỹ năng: triệu hồi 5 lính', 722, 130 + 240);
	text('xuất hiện: > 6000 điểm', 722, 145 + 240);
	text('cấp độ: B - khá mạnh', 722, 160 + 240);
	text('tên: thủ lĩnh', 722, 175 + 240);
}
function tts() {
	khung(900, 240);
	def(905, 5 + 240, 2000, 'red');
	text('máu: 2000', 902, 85 + 240);
	text('tốc độ: 1 - 4s', 902, 100 + 240);
	text('sức mạnh: 10', 902, 115 + 240);
	text('kỹ năng: không có', 902, 130 + 240);
	text('xuất hiện: > 8000 điểm', 902, 145 + 240);
	text('cấp độ: A - mạnh', 902, 160 + 240);
	text('tên: trùm', 902, 175 + 240);
}
function book() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	defe();
	flo();
	boms();
	arm();
	arg();
	defl();
	defx();
	th();
	tt();
	ts();
	tm();
	ttl();
	tts();
	if (a) {
		f = requestAnimationFrame(book);
	}
}