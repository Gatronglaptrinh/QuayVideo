var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = 500;
c.height = 550;
const enemies = [];
const cellSize = 50;
const projectiles = [];
let f = 0;
class Enemy {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 50;
		this.height = 50;
		this.speed = 1;
		this.maxSpeed = this.speed;
		this.color = 'red';
		this.health = 20;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = 'gold';
		ctx.font = '30px Arial';
		ctx.fillText(Math.floor(this.health) ,this.x+10, this.y+30)
	}
	update() {
		this.y += this.maxSpeed;
	}
}
class Defender {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 50;
		this.height = 50;
		this.color = 'blue';
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	update() {
		if (this.x < 0) {
			this.x = 0;
		}
		if (this.x + this.width > c.width) {
			this.x = c.width - this.width;
		}
	}
}
class Projectile {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
		this.color = 'black';
		this.speed = 2;
		this.power = 20;
	}
	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y,this.width,0,Math.PI*2);
		ctx.fill();
	}
	update() {
		this.y -= this.speed;
	}
}
function spawnEnemy() {
	r = Math.floor(Math.random() * 9) * cellSize;
	if(f % 400 == 0) {
		enemies.push(new Enemy(r,0));
	}
	for (let i = 0; i < enemies.length; i++) {
		enemies[i].draw();
		enemies[i].update();
		if (enemies[i].health <= 0) {
            enemies.splice(i, 1);
            i--;
        }
        if (true) {}
	}
}
function spawnProjectiles() {
	for (let i = 0; i < projectiles.length; i++) {
		projectiles[i].update();
		projectiles[i].draw();
		for (let j = 0; j < enemies.length; j++) {
				if (enemies[j] && projectiles[i] && collision(projectiles[i], enemies[j])) {
				enemies[j].health -= projectiles[i].power;
					if (!projectiles[i].xieu) {
					projectiles.splice(i, 1);
					i--;
				}
			}
		}
		if (projectiles[i] && projectiles[i].x > c.width) {
			projectiles.splice(i, 1);
			i--;
		}
	}
}
a = new Defender(0,c.height-50);
function animate() {
	ctx.clearRect(0,0,c.width,c.height);
	a.draw();
	a.update();
	spawnEnemy();
	spawnProjectiles();
	f++;
	if (!over) {
		requestAnimationFrame(animate);
	}
}
function collision(first, second) {
	if (!(first.x > second.x + second.width ||
			first.x + first.width < second.x ||
			first.y > second.y + second.height ||
			first.y + first.height < second.y)) {
			return true;
		};
	};
animate();