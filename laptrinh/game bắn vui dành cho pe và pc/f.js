var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = 500;
c.height = 550;
var enemies = [];
const cellSize = 50;
const projectiles = [];
const items = [];
let f = 0;
var fr = 0;
let over = false;
let e = 10;
let b = 2;
let p = 20;
var score = 0;
const win = 5000;
class Enemy {
	constructor(x, y, h) {
		this.x = x;
		this.y = y;
		this.width = 50;
		this.height = 50;
		this.speed = 0.5;
		this.maxSpeed = this.speed;
		this.color = 'red';
		this.health = h;
    this.maxHealth = this.health;
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
class Item {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 25;
		this.height = 25;
		this.speed = 1;
		this.color = 'yellow';
		this.functions = Math.floor(Math.random() * 5);
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	update() {
		this.y += this.speed;
	}
  function() {
    switch(this.functions) {
        case 2:
        e = 30;
        break;
        case 1:
        b = 10;
        break;
        case 0:
        p = 50;
        break;
        case 3:
        for(let i = 0;i < 4; i++) {
          projectiles.push(new Projectile(25,425,e,b));
          projectiles.push(new Projectile(75,425,e,b));
          projectiles.push(new Projectile(125,425,e,b));
          projectiles.push(new Projectile(175,425,e,b));
          projectiles.push(new Projectile(225,425,e,b));
          projectiles.push(new Projectile(275,425,e,b));
          projectiles.push(new Projectile(325,425,e,b));
          projectiles.push(new Projectile(375,425,e,b));
          projectiles.push(new Projectile(425,425,e,b));
          projectiles.push(new Projectile(475,425,e,b));
        }
        break;
        case 4:
        score += enemies.length * 20;
        enemies = [];
        break;
    }
    
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
	constructor(x, y, r,s,p=20) {
		this.x = x;
		this.y = y;
		this.width = r;
		this.height = 10;
		this.color = 'black';
		this.speed = s;
		this.power = p;
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
	let r = Math.floor(Math.random() * 10) * cellSize;
  let h = Math.floor(Math.random() * 5 + 1) * 20;
	if(f % 100 == 0) {
		enemies.push(new Enemy(r,0,h));
	}
	for (let i = 0; i < enemies.length; i++) {
		enemies[i].draw();
		enemies[i].update();
		if (enemies[i].health <= 0) {
            score += enemies[i].maxHealth / 2;
            enemies.splice(i, 1);
            i--;
        }
        else if (enemies[i].y + enemies[i].height >= c.height) {
        	over = true;
        }
	}
  
}
function spawnItems() {
	let r = Math.floor(Math.random() * 10) * cellSize;
	if(f % 2000 == 0) {
		items.push(new Item(r,0));
	}
  if(fr <= 0) {
    e = 10;
    b = 2;
    fr = 0;
    p = 20;
  }
	for (let i = 0; i < items.length; i++) {
		items[i].draw();
    items[i].update();
    if (items[i].y + items[i].height >= c.height) {
      items.splice(i, 1);
      i--;
    }
    if (items[i] && collision(a, items[i])) {
      items[i].function();
      items.splice(i, 1);
      i--;
      fr = 500;
    }
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
	}
	if (f % 5000 == 0) {
		projectiles.push(new Projectile(25,425,e,b));
		projectiles.push(new Projectile(75,425,e,b));
		projectiles.push(new Projectile(125,425,e,b));
		projectiles.push(new Projectile(175,425,e,b));
		projectiles.push(new Projectile(225,425,e,b));
		projectiles.push(new Projectile(275,425,e,b));
		projectiles.push(new Projectile(325,425,e,b));
		projectiles.push(new Projectile(375,425,e,b));
		projectiles.push(new Projectile(425,425,e,b));
		projectiles.push(new Projectile(475,425,e,b));
	}
}
let a = new Defender(0,c.height-50);
document.addEventListener('keydown', function(ev) {
	if (ev.which == 32) {
		projectiles.push(new Projectile(a.x+25,a.y+25,e,b,p));
	}
	if (ev.which == 37) {
		a.x -= 50;
	}
	if (ev.which == 39) {
		a.x += 50;
	}
	console.log(ev);
});
function animate() {
	ctx.clearRect(0,0,c.width,c.height);
	a.draw();
	a.update();
	spawnEnemy();
	spawnProjectiles();
  spawnItems();
	f++;
  fr--;
  document.getElementById('fr').innerHTML = fr;
  document.getElementById('score').innerHTML = score;
  if (score > win) {
    over = true;
  }
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