// tiếp theo mình sẽ lấy id của canvas
c = document.getElementById('c');
// đăng nhập vào context2D
ctx = c.getContext('2d');
//kiểm tra nha
// không bị lỗi, tiếp tục thôi
// lấy đồ dài và rộng cho canvas(c)
c.width = 1000;
c.height = 600;
c.style.backgroundColor = 'black';
// kiểm tra nha
// ok rồi
// tạo đố tượng snake
// à quên mình sẽ theo
class Snake {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.color = 'cyan';
		this.speedX = 0;
		this.speedY = 0;
		this.cell = [];
		this.maxCell = 4;
	}
	draw() {
		for (let i = 0; i < this.cell.length; i++) {
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.fillRect(this.cell[i].x, this.cell[i].y, 10, 10);// tiếp tục vẽ hình
			// thử nha, ok
		}
			
	}
	update() {
		this.x += this.speedX;
		this.y += this.speedY;

		if (this.x >= c.width) {// tiếp tục mình sẽ làm cho con rắn đi xuyên nha. Đây là code về con xuyên, ok
			this.x = 0;
		}
		if (this.x < 0) {
			this.x = c.width;
		}
		if (this.y >= c.height) {
			this.y = 0;
		}
		if (this.y < 0) {
			this.y = c.height;
		}
		// thử nha, ok
		// tiếp theo mình sẽ làm đuôi cho snake
		this.cell.unshift({x: this.x, y: this.y})
		if (this.cell.length > this.maxCell) {
			this.cell.pop();
		}
	}
	loop() {
		this.draw();
		this.update();
	}
	eat(x, y) {
		if (this.x == x && this.y == y) {
			this.maxCell++;
			return true;
		}
		return false;
	}
}
// ok rồi
// tạo đối tượng snake thôi
// dừng lại cho bạn chép code
snake = new Snake();
// tạo hàm vẽ liên tục trong canvas

// lab máy luôn
// lỗi rồi lên mạng xem một chút
// tạm thời dừng một chút nha
// mới tìm hiểu một chút
// ok
// hàm nghe hoạt động của mình
document.addEventListener('keydown', function(e) {
	if (e.keyCode == 40) {
		snake.speedY = 10;
		snake.speedX = 0;
	}
	if (e.keyCode == 38) {
		snake.speedY = -10;
		snake.speedX = 0;
	}
	if (e.keyCode == 37) {
		snake.speedX = -10;
		snake.speedY = 0;
	}
	if (e.keyCode == 39) {
		snake.speedX = 10;
		snake.speedY = 0;
	}
	// console.log(e.keyCode);
	// xong
});
class Food {
	constructor() {
		this.x = 0;
		this.y = 0;
	}
	draw() {
		ctx.beginPath();
		ctx.fillStyle = 'pink';
		ctx.fillRect(this.x, this.y, 10, 10);
	}
	update() {
		this.x = (Math.floor(Math.random()* (19 - 0)) + 0)*10
		this.y = (Math.floor(Math.random()* (19 - 0)) + 0)*10
	}
	loop() {
		this.update();
		this.draw();
	}
}

food = new Food();
function animation() {
	ctx.clearRect(0, 0, c.width, c.height);
	snake.loop();
	food.draw();
	setTimeout(animation, 50);
	if (snake.eat(food.x, food.y)) {
		food.update();
	}
	// ok
}
animation();
// ok xong phần một chào mọi người
// nhớ like cho video này nhé
// tạm biệt
// hello mọi người, hôm nay mình sẽ làm phần hai
// tiếp tục mình sẽ làm cho con rắn đi xuyên nha
// xin lỗi, mình bị lỗi khi quay nên mình đã làm một số thứ
// để mình review
// tạo đối tuộng food
// ok xong phần hai chào mọi người
// nhớ like cho video này nhé
// tạm biệt
// hello mọi người
// phần này là phần cuối nha
// nhớ xem được 30 lượt xem sẽ có tập 2 của series này
// bắt đầu thôi
// giờ làm hết game