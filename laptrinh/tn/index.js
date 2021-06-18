var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var gravity = 1;
var friction = 0.98;

addEventListener("click", function(event) {
  init();
});

function Ball(x, y, dy, dx, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.update = function() {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
      this.dx = this.dx * friction;
    } else {
      this.dy += gravity;
    }
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx * friction;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);  
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };
}

var ball;
function init() {
  var dx = Math.floor(Math.random() * (10 - (-10) + 1) + (-10))
  var dy = Math.floor(Math.random() * (5 - (-5) + 1) + (-5))
  ball = new Ball(canvas.width / 2 + dx, canvas.height / 2 + dy, dx, dy, 30, 'blue');
}

function animate() {
    requestAnimationFrame(animate);

  c.clearRect(0, 0, canvas.width, canvas.height);
  ball.update()
}

init();
animate();