const c = document.querySelector('canvas');

const ctx = c.getContext('2d');

r = 5;
xuyen = false;
th = false;
rr = 20;

c.width = 900;
c.height = 600;
s = 0;
b = 0;
class Player {
    constructor(x, y, color, radius) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    }
}
class Projectile {
    constructor(x, y, color, radius, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    }
    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}
class Enemy {
    constructor(x, y, color, radius, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    }
    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}
const player = new Player(c.width / 2, c.height / 2, 'blue', rr);
const projectiles = [];
const enemies = [];
const items = [];


function spawnEnemies() {
    setInterval(() => {
        const radius = Math.random() * (30 - 20) + 4;
        let x;
        let y;
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : c.width + radius;
            y = Math.random() * c.height;
            // y = Math.random() < 0.5 ? 0 - radius : c.height + radius;
        } else {
            x = Math.random() * c.width;
            y = Math.random() < 0.5 ? 0 - radius : c.height + radius;
        }
        const color = 'green';
        const angle = Math.atan2(c.height / 2 - y, c.width / 2 - x); /*tim so lieu de tim huong */
        const velocity = { // tinh huong di cua ven dan
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        enemies.push(new Enemy(x, y, color, radius, velocity));
    }, 1000);
}
function spawnItem() {
    setInterval(() => {
        const radius = 10;
        let x;
        let y;
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : c.width + radius;
            y = Math.random() * c.height;
            // y = Math.random() < 0.5 ? 0 - radius : c.height + radius;
        } else {
            x = Math.random() * c.width;
            y = Math.random() < 0.5 ? 0 - radius : c.height + radius;
        }
        let color;
        const angle = Math.atan2(c.height / 2 - y, c.width / 2 - x); /*tim so lieu de tim huong */
        const velocity = { // tinh huong di cua ven dan
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        as = Math.floor(Math.random() * 4);
        if (as == 0) {
            color = 'yellow';
        } else if (as == 1) {
            color = 'cyan';
        } else if (as == 2) {
            color = 'orange';
        } else if (as == 3) {
            color = 'black';
        }

        items.push(new Enemy(x, y, color, radius, velocity));
    }, 15000);
}

let aID;
let t;
let sID;
function trut() {
    sID = setTimeout(function() {
        if (t > 0) {
            t--;
            document.getElementById('saa').innerHTML = t;
        }
    }, 10);
        
    
}
function animation() {
    aID = requestAnimationFrame(animation);
    ctx.clearRect(0, 0, c.width, c.height);
    player.draw();
    projectiles.forEach((projectile) => {
        projectile.update();
    });
    enemies.forEach((enemy, index) => {
        enemy.update();

        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        if (dist - enemy.radius - player.radius < 1) {
            cancelAnimationFrame(aID);
            ctx.beginPath();
            ctx.fillStyle = 'green';
            ctx.fillRect(c.width / 2 - 200, c.height / 2 - 100, 400, 200);
        }
    
        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
            if (dist - enemy.radius - projectile.radius < 1) {
                setTimeout(() => {
                    enemies.splice(index, 1);
                    if (!xuyen) {
                        projectiles.splice(projectileIndex, 1);
                    }
                    b++;
                    if (!th) {
                        s += 10;
                    } else {
                        s += 25;
                    }

                    document.getElementById('a').innerHTML = s;
                    document.getElementById('b').innerHTML = b;
                }, 0);
                
            }
        });
    });
    items.forEach((enemy, index) => {
        enemy.update();

        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        if (dist - enemy.radius - player.radius < 1) {
            if (enemy.color == 'yellow') {
                r = 100;
                t = 100;
                document.getElementById('ass').innerHTML = 'Đạn to';
            } else if (enemy.color == 'cyan') {
                xuyen = true;
                t = 200;
                document.getElementById('ass').innerHTML = 'Bắn xuyên';
            } else if (enemy.color == 'orange') {
                th = true;
                t = 200;
                document.getElementById('ass').innerHTML = 'Thêm tiền';
            } else if (enemy.color == 'black') {
                rr = 10;
                t = 150;
                document.getElementById('ass').innerHTML = 'Thu nhỏ';
            }
        }
    });
    trut();
    if (t <= 0) {
        r = 5;
        xuyen = false;
        th = false;
        rr = 20;
        document.getElementById('ass').innerHTML = 'Không có';
        clearTimeout(sID);
    }
}


player.draw();

addEventListener('click', (e) => {
    const angle = Math.atan2(e.clientY - c.height / 2, e.clientX - c.width / 2); /*tm so lieu de tim huong */
    const velocity = { // tinh huong di cua ven dan
        x: Math.cos(angle),
        y: Math.sin(angle)
    }
    projectiles.push(new Projectile(c.width / 2, c.height / 2, 'red', r, velocity));
});
animation();
spawnEnemies();
spawnItem();