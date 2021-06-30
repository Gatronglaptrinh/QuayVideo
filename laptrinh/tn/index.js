c = document.getElementById('c');
ctx = c.getContext('2d');
c.width = 500;
c.height = 500;
c.style.border = '1px solid black';
rects = [];
class Rect {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var a = new Rect(0,0,30,30,'red');
a.draw();