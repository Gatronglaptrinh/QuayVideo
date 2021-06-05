const WIDTH = 1400;
const HEIGHT = 800;
const PARTICLE_SIZE = 7;
const PARTICLE_CHANGE_SIZE_SPEED = 0.1;	
const PARTICLE_CHANGE_SPEED = 0.5;
const ACCELERATION = 0.1;
const DOT_CHANGE_SIZE_SPEED = 0.05;
const DOT_CHANGE_ALPHA_SPEED = 0.07;
const PARTICLE_MIN_SPEED = 10;
const NUM_PARTICLE_BULLET = 20;


class particle {
	constructor(bullet, deg) {
		this.bullet = bullet;
		this.ctx = bullet.ctx;
		this.deg = deg;
		this.x = this.bullet.x;
		this.y = this.bullet.y;
		this.color = this.bullet.color;
		this.size = PARTICLE_SIZE;
		this.speed = Math.random() * 4 + PARTICLE_MIN_SPEED;
		this.speedX = 3;
		this.speedY = 3;
		this.fallSpeed = 0;

		this.dots = []
			//{ x: 10, y: 10, alpha: 1, size: 10 }
	}

	update() {
		this.speed -= PARTICLE_CHANGE_SPEED;
		if (this.speed < 0) {
			this.speed = 0;
		}

		this.fallSpeed += ACCELERATION;

		this.speedX = this.speed * Math.cos(this.deg);
		this.speedY = this.speed * Math.sin(this.deg) + this.fallSpeed;

		this.x += this.speedX;
		this.y += this.speedY;

		if (this.size > PARTICLE_CHANGE_SIZE_SPEED) {
			this.size -= PARTICLE_CHANGE_SIZE_SPEED;
		}

		if (this.size > 0) {
			this.dots.push({
			 x: this.x,
			 y: this.y,
			 alpha: 1,
			 size: this.size
			});
		}




		this.dots.forEach(dot => {
			dot.size -= DOT_CHANGE_SIZE_SPEED;
			dot.alpha -= DOT_CHANGE_ALPHA_SPEED;
		});

		this.dots = this.dots.filter( dot => {
			return dot.size > 0;
		});

		if (this.dots.length == 0) {
			this.remove();
		}
	}
	remove() {
		this.bullet.particles.splice( this.bullet.particles.indexOf(this), 1);
	}

	draw() {
		this.dots.forEach( dots => {
			this.ctx.fillStyle = 'rgba('+this.color+','+dots.alpha+')';
			this.ctx.beginPath();
			this.ctx.arc(dots.x, dots.y, dots.size, 0, 2 * Math.PI);
			this.ctx.fill();
			//console.log(this.ctx.fillStyle);
		})
	}
}


class bullet {
	constructor(fireworks) {
		this.fireworks = fireworks;
		this.ctx = fireworks.ctx;
		this.x = Math.random() * WIDTH;
		this.y = Math.random() * HEIGHT / 2;
		this.color = Math.floor(Math.random() * 255) + ',' 
		+ Math.floor(Math.random() * 255) + ',' 
		+ Math.floor(Math.random() * 255);
		this.particles = [];
		let bulletDeg = Math.PI * 2 / NUM_PARTICLE_BULLET;
		for(let i = 0; i < NUM_PARTICLE_BULLET; i++){
			let newParticle = new particle(this, i * bulletDeg);
			this.particles.push(newParticle);
		}
	}


	remove() {
		this.fireworks.bullets.splice( this.fireworks.bullets.indexOf(this), 1);
	}


	update() {
		if (this.particles.length == 0) {
			this.remove();
		}
		this.particles.forEach( particle => particle.update() );
	}
	draw() {
		this.particles.forEach( particle => particle.draw() );
	}
}



class fireworks {
	constructor() {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.canvas.width = WIDTH;
		this.canvas.height = HEIGHT;
		document.body.appendChild(this.canvas);

		this.bullets = [];
			setInterval(() => {
				let newBullet = new bullet(this);
				this.bullets.push(newBullet);
			}, 2000);

		this.loop();
	}
	loop() {
		this.bullets.forEach( bullet => bullet.update() );
		this.draw();
		setTimeout( () => this.loop(), 20 );
	}

	clearScreen() {
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
	}

	draw() {
		this.clearScreen();
		this.bullets.forEach( bullet => bullet.draw() );
	}
}

var f = new fireworks();