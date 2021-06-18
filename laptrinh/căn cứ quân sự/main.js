const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1300;
canvas.height = 600;
var score = 0;

// global variables
function play() {
    const cellSize = 100;
    const cellGap = 3;
    let numberOfResources = 50;
    let enemiesInterval = 600;
    let frame = 0;
    let gameOver = false;
    let choose = 0;
    const winningScore = 10000;

    const gameGrid = [];
    const defenders = [];
    const enemies = [];
    const enemyPositions = [];
    const projectiles = [];
    const resources = [];

    // mouse
    const mouse = {
        x: 10,
        y: 10,
        width: 0.1,
        height: 0.1,
    }
    let canvasPosition = canvas.getBoundingClientRect();
    canvas.addEventListener('mousemove', function(e){
        mouse.x = e.x - canvasPosition.left;
        mouse.y = e.y - canvasPosition.top;
    });
    canvas.addEventListener('mouseleave', function(){
        mouse.y = undefined;
        mouse.y = undefined;
    });

    // game board
    const controlsBar = {
        width: canvas.width,
        height: cellSize,
    }
    class Cell {
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.width = cellSize;
            this.height = cellSize;
        }
        draw(){
            if (mouse.x && mouse.y && collision(this, mouse)){
                ctx.strokeStyle = 'black';
                ctx.strokeRect(this.x, this.y, this.width, this.height);
            }
        }
    }
    function createGrid(){
        for (let y = cellSize; y < canvas.height; y += cellSize){
            for (let x = 0; x < canvas.width; x += cellSize){
                gameGrid.push(new Cell(x, y));
            }
        }
    }
    createGrid();
    function handleGameGrid(){
        for (let i = 0; i < gameGrid.length; i++){
            gameGrid[i].draw();
        }
    }
    // projectiles
    class Projectile {
        constructor(x, y, p=20, xi=false){
            this.x = x;
            this.y = y;
            this.width = 10;
            this.height = 10;
            this.power = p;
            this.speed = 5;
            this.xieu = xi;
        }
        update(){
            this.x += this.speed;
        }
        draw(){
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function handleProjectiles(){
        for (let i = 0; i < projectiles.length; i++){
            projectiles[i].update();
            projectiles[i].draw();

            for (let j = 0; j < enemies.length; j++){
                if (enemies[j] && projectiles[i] && collision(projectiles[i], enemies[j])){
                    enemies[j].health -= projectiles[i].power;
                    if (!projectiles[i].xieu) {
                        projectiles.splice(i, 1);
                        i--;
                    }
                }
            }
            if (projectiles[i] && projectiles[i].x > canvas.width){
                projectiles.splice(i, 1);
                i--;
            }
        }
    }
    // defenders
    class Defender {
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.shooting = false;
            this.health = 100;
            this.projectiles = [];
            this.timer = 0;
        }
        draw(){
            ctx.fillStyle = 'blue';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
        update(){
            if (this.shooting){
                this.timer++;
                if (this.timer % 100 === 0){
                    projectiles.push(new Projectile(this.x + 70, this.y + 50));
                }
            } else {
                this.timer = 0;
            }
        }
    }
    class Armor {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.health = 5000;
        }
        draw() {
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
        update() {}
    }
    class Bom {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize / 2 - cellGap * 2;
            this.health = 1;
            this.bom = true;
            this.power = 5;
            this.as = true;
        }
        draw() {
            ctx.fillStyle = 'yellow';
            ctx.fillRect(this.x, this.y + cellSize / 2, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + cellSize / 2 + 30);
        }
        update() {

        }
    }
    class DefenderLienthanh {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.shooting = false;
            this.health = 100;
            this.projectiles = [];
            this.timer = 0;
        }
        draw() {
            ctx.fillStyle = 'cyan';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
        update() {
            if (this.shooting) {
                this.timer++;
                if (this.timer % 5 === 0) {
                    projectiles.push(new Projectile(this.x + 70, this.y + 50, 2, false));
                }
            } else {
                this.timer = 0;
            }
        }
    }
    class DefenderXieu {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.shooting = false;
            this.health = 100;
            this.projectiles = [];
            this.timer = 0;
        }
        draw() {
            ctx.fillStyle = 'lightcyan';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
        update() {
            if (this.shooting) {
                this.timer++;
                if (this.timer % 100 === 0) {
                    projectiles.push(new Projectile(this.x + 70, this.y + 50, 0.5, true));
                }
            } else {
                this.timer = 0;
            }
        }
    }
    class SpikeArmor {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.health = 2500;
            this.bom = true;
            this.power = 1;
        }
        draw() {
            ctx.fillStyle = 'lightgreen';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
        update() {

        }
    }
    class Flowers {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.health = 100;
            this.timer = 0;
        }
        draw() {
            ctx.fillStyle = 'orange';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
        update() {
            this.timer++;
            if (this.timer % 1000 == 0) {
                resources.push(new Resource(this.x, this.y));
            }
        }
    }
    canvas.addEventListener('click', function(){
        for (let i = 3; i < 8+3; i++) {
            if(i * 100 < mouse.x & i * 100 + 70 > mouse.x && mouse.y > 5 && mouse.y < 95) {
                choose = i-3;
            }
        }
        const gridPositionX = mouse.x  - (mouse.x % cellSize) + cellGap;
        const gridPositionY = mouse.y - (mouse.y % cellSize) + cellGap;
        if(choose == 7) {
            for (let i = 0; i < defenders.length; i++){
                if (defenders[i].x === gridPositionX && defenders[i].y === gridPositionY) {
                    defenders.splice(i, 1);
                }
            }
            canvas.style.cursor = "url(./sd.png), auto";
        }
        else {
            canvas.style.cursor = "default";
        }
        if (gridPositionY < cellSize) return;
        for (let i = 0; i < defenders.length; i++){
            if (defenders[i].x === gridPositionX && defenders[i].y === gridPositionY) return;
        }
        if(choose == 0) {
            let defenderCost = 100;
            if (numberOfResources >= defenderCost){
                defenders.push(new Defender(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        if(choose == 1) {
            let defenderCost = 50;
            if (numberOfResources >= defenderCost){
                defenders.push(new Flowers(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        if(choose == 2) {
            let defenderCost = 50;
            if (numberOfResources >= defenderCost){
                defenders.push(new Bom(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        if(choose == 3) {
            let defenderCost = 150;
            if (numberOfResources >= defenderCost){
                defenders.push(new Armor(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        if(choose == 4) {
            let defenderCost = 300;
            if (numberOfResources >= defenderCost){
                defenders.push(new SpikeArmor(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        if(choose == 5) {
            let defenderCost = 200;
            if (numberOfResources >= defenderCost){
                defenders.push(new DefenderLienthanh(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        if(choose == 6) {
            let defenderCost = 150;
            if (numberOfResources >= defenderCost){
                defenders.push(new DefenderXieu(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
    });
    function handleDefenders(){
        for (let i = 0; i < defenders.length; i++){
            defenders[i].draw();
            defenders[i].update();
            if (enemyPositions.indexOf(defenders[i].y) !== -1){
                defenders[i].shooting = true;
            } else {
                defenders[i].shooting = false;
            }
            for (let j = 0; j < enemies.length; j++){
                if (defenders[i] && collision(defenders[i], enemies[j])){
                    enemies[j].movement = 0;
                    defenders[i].health -= enemies[j].power;
                    if (defenders[i].bom) {
                        enemies[j].health -= defenders[i].power;
                    }
                }
                if (defenders[i] && defenders[i].health <= 0){
                    enemies[j].movement = enemies[j].speed;
                    if (defenders[i].as) {
                        enemies[j].movement = 0;
                    }
                    defenders.splice(i, 1);
                    i--;
                }
            }
        }
    }
    // enemies
    class Enemy {
        constructor(verticalPosition){
            this.x = canvas.width;
            this.y = verticalPosition;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.speed = Math.random() * 0.2 + 0.4;
            this.movement = this.speed;
            this.health = 100;
            this.maxHealth = this.health;
            this.power = 1;
        }
        update(){
            this.x -= this.movement;
        }
        draw(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'black';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
    }
    class EnemyTrau {
        constructor(verticalPosition){
            this.x = canvas.width;
            this.y = verticalPosition;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.speed = Math.random() * 0.2 + 0.4;
            this.movement = this.speed;
            this.health = 200;
            this.maxHealth = this.health;
            this.power = 1;
        }
        update(){
            this.x -= this.movement;
        }
        draw(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'black';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
    }
    class EnemySpeed {
        constructor(verticalPosition){
            this.x = canvas.width;
            this.y = verticalPosition;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.speed = Math.random() * 3 + 1;
            this.movement = this.speed;
            this.health = 100;
            this.maxHealth = this.health;
            this.power = 1;
        }
        update(){
            this.x -= this.movement;
        }
        draw(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'black';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
    }
    class EnemyManh {
        constructor(verticalPosition){
            this.x = canvas.width;
            this.y = verticalPosition;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.speed = Math.random() * 0.2 + 0.4;
            this.movement = this.speed;
            this.health = 200;
            this.maxHealth = this.health;
            this.power = 5;
        }
        update(){
            this.x -= this.movement;
        }
        draw(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'black';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
    }
    class EnemyThuLinh {
        constructor(verticalPosition){
            this.x = canvas.width;
            this.y = verticalPosition;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.speed = Math.random() * 0.1 + 0.2;
            this.movement = this.speed;
            this.health = 150;
            this.maxHealth = this.health;
            this.power = 1;
        }
        update(){
            this.x -= this.movement;
        }
        draw(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'black';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
    }
    class EnemyBoss {
        constructor(verticalPosition){
            this.x = canvas.width;
            this.y = verticalPosition;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.speed = Math.random() * 3 + 1;
            this.movement = this.speed;
            this.health = 2000;
            this.maxHealth = this.health;
            this.power = 10;
        }
        update(){
            this.x -= this.movement;
        }
        draw(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'black';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
    }
    function handleEnemies(){
        for (let i = 0; i < enemies.length; i++){
            enemies[i].update();
            enemies[i].draw();
            if (enemies[i].x < 0){
                gameOver = true;
            }
            if (enemies[i].health <= 0){
                let gainedResources = enemies[i].maxHealth/10;
                score += gainedResources;
                const findThisIndex = enemyPositions.indexOf(enemies[i].y);
                enemyPositions.splice(findThisIndex, 1);
                enemies.splice(i, 1);
                i--;
              }
        }
        if (score < winningScore) {
            if (frame % enemiesInterval === 0 && score < winningScore){
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new Enemy(verticalPosition));
                enemyPositions.push(verticalPosition);
                if (enemiesInterval > 80) enemiesInterval -= 50;
            }
            if (frame % 500 === 0 && score > 2000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemyTrau(verticalPosition));
                enemyPositions.push(verticalPosition);
            }
            if (frame % 500 === 0 && score > 3000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemySpeed(verticalPosition));
                enemyPositions.push(verticalPosition);
            }
            if (frame % 500 === 0 && score > 5000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemyManh(verticalPosition));
                enemyPositions.push(verticalPosition);
            }
            if (frame % 500 === 0 && score > 6000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemyThuLinh(verticalPosition));
                enemyPositions.push(verticalPosition);
                for (let i = 0; i < 10; i++) {
                    enemies.push(new Enemy(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
            }
            if (frame % 1000 === 0 && score > 8000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemyBoss(verticalPosition));
                enemyPositions.push(verticalPosition);
            }
            if (frame % 2000 === 0 && score > 9000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                for (let i = 0; i < 50; i++) {
                    enemies.push(new Enemy(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
                for (let i = 0; i < 20; i++) {
                    enemies.push(new EnemySpeed(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
                for (let i = 0; i < 20; i++) {
                    enemies.push(new EnemyTrau(verticalPosition));
                    enemyPositions.push(verticalPosition);
                    enemies.push(new EnemyManh(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
                for (let i = 0; i < 6; i++) {
                    enemies.push(new EnemyBoss(verticalPosition));
                    enemyPositions.push(verticalPosition);
                    enemies.push(new EnemyThuLinh(verticalPosition));
                    enemyPositions.push(verticalPosition);
                    for (let i = 0; i < 10; i++) {
                        enemies.push(new Enemy(verticalPosition));
                        enemyPositions.push(verticalPosition);
                    }
                }
            }
        }
    }

    // resources
    const amounts = [25, 50];
    class Resource {
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.width = cellSize * 0.6;
            this.height = cellSize * 0.6;
            this.amount = amounts[Math.floor(Math.random() * amounts.length)];
        }
        draw(){
            ctx.fillStyle = 'yellow';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'black';
            ctx.font = '20px Orbitron';
            ctx.fillText(this.amount, this.x + 15, this.y + 25);
        }
    }
    function handleResources(){
        let x = Math.random() * (canvas.width - cellSize);
        let y = (Math.floor(Math.random() * 5) + 1) * cellSize + 25;
        if (frame % 500 === 0 && score < winningScore){
            resources.push(new Resource(x, y));
        }
        for (let i = 0; i < resources.length; i++){
            resources[i].draw();
            if (resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)){
                numberOfResources += resources[i].amount;
                resources.splice(i, 1);
                i--;
            }
        }
    }
    document.getElementById('sd').addEventListener('click', function() {
        var as = 0;
        for (let i = 0; i < resources.length; i++) {
            as += resources[i].amount;
        }
        numberOfResources += as;
        resources.splice(0,resources.length);
    });

    // utilities
    function handleGameStatus(){
        ctx.fillStyle = 'gold';
        ctx.font = '30px Orbitron';
        ctx.fillText('Score: ' + score, 20, 40);
        ctx.fillText('Resources: ' + numberOfResources, 20, 80);
        if (gameOver){
            ctx.fillStyle = 'black';
            ctx.font = '90px Orbitron';
            ctx.fillText('GAME OVER', 135, 330);
        }
        if (score >= winningScore && enemies.length === 0){
            ctx.fillStyle = 'black';
            ctx.font = '60px Orbitron';
            ctx.fillText('LEVEL COMPLETE', 130, 300);
            ctx.font = '30px Orbitron';
            ctx.fillText('You win with ' + score + ' points!', 134, 340);
        }
        ctx.fillStyle = 'lightgray';
        ctx.fillRect(300, 5, 70, 90);
        ctx.fillStyle = 'blue';
        ctx.fillRect(305, 10, 60, 60);
        ctx.fillStyle = 'gold';
        ctx.font = '20px Orbitron';
        ctx.fillText(Math.floor(100), 305 + 15, 10 + 30);
        ctx.fillStyle = 'blue';
        ctx.font = '20px Orbitron';
        ctx.fillText(100, 305 + 15, 90);

        ctx.fillStyle = 'lightgray';
        ctx.fillRect(400, 5, 70, 90);
        ctx.fillStyle = 'orange';
        ctx.fillRect(405, 10, 60, 60);
        ctx.fillStyle = 'gold';
        ctx.font = '20px Orbitron';
        ctx.fillText(Math.floor(100), 405 + 15, 10 + 30);
        ctx.fillStyle = 'blue';
        ctx.font = '20px Orbitron';
        ctx.fillText(50, 405 + 15, 90);

        ctx.fillStyle = 'lightgray';
        ctx.fillRect(500, 5, 70, 90);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(505, 35, 60, 30);
        ctx.fillStyle = 'gold';
        ctx.font = '20px Orbitron';
        ctx.fillText(Math.floor(1), 505 + 15, 10 + 30 + 15);
        ctx.fillStyle = 'blue';
        ctx.font = '20px Orbitron';
        ctx.fillText(50, 505 + 15, 90);

        ctx.fillStyle = 'lightgray';
        ctx.fillRect(600, 5, 70, 90);
        ctx.fillStyle = 'green';
        ctx.fillRect(605, 10, 60, 60);
        ctx.fillStyle = 'gold';
        ctx.font = '20px Orbitron';
        ctx.fillText(Math.floor(5000), 605 + 15, 10 + 30);
        ctx.fillStyle = 'blue';
        ctx.font = '20px Orbitron';
        ctx.fillText(150, 605 + 15, 90);

        ctx.fillStyle = 'lightgray';
        ctx.fillRect(700, 5, 70, 90);
        ctx.fillStyle = 'lightgreen';
        ctx.fillRect(705, 10, 60, 60);
        ctx.fillStyle = 'gold';
        ctx.font = '20px Orbitron';
        ctx.fillText(Math.floor(2500), 705 + 15, 10 + 30);
        ctx.fillStyle = 'blue';
        ctx.font = '20px Orbitron';
        ctx.fillText(300, 705 + 15, 90);

        ctx.fillStyle = 'lightgray';
        ctx.fillRect(800, 5, 70, 90);
        ctx.fillStyle = 'cyan';
        ctx.fillRect(805, 10, 60, 60);
        ctx.fillStyle = 'gold';
        ctx.font = '20px Orbitron';
        ctx.fillText(Math.floor(100), 805 + 15, 10 + 30);
        ctx.fillStyle = 'blue';
        ctx.font = '20px Orbitron';
        ctx.fillText(200, 805 + 15, 90);

        ctx.fillStyle = 'lightgray';
        ctx.fillRect(900, 5, 70, 90);
        ctx.fillStyle = 'lightcyan';
        ctx.fillRect(905, 10, 60, 60);
        ctx.fillStyle = 'gold';
        ctx.font = '20px Orbitron';
        ctx.fillText(Math.floor(100), 905 + 15, 10 + 30);
        ctx.fillStyle = 'blue';
        ctx.font = '20px Orbitron';
        ctx.fillText(150, 905 + 15, 90);

        ctx.fillStyle = 'lightgray';
        ctx.fillRect(1000, 5, 70, 90);
        ctx.fillStyle = 'white';
        ctx.fillRect(1005 + 25, 10, 10, 40);
        ctx.fillRect(1005, 10, 60, 10);
        ctx.fillStyle = 'black';
        ctx.fillRect(1005, 50, 60, 40);
    }
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'blue';
        ctx.fillRect(0,0,controlsBar.width, controlsBar.height);
        handleGameGrid();
        handleDefenders();
        handleResources();
        if(frame >= 4000) {
            handleEnemies();
        }
        handleProjectiles();
        handleGameStatus();
        if(document.getElementById('so').value == '0') {
            document.getElementById('sd').style.display = 'block';
        }
        if(document.getElementById('so').value == '1') {
            document.getElementById('sd').style.display = 'none';
        }
        frame++;
        if (!gameOver) requestAnimationFrame(animate);
    }
    animate();

    function collision(first, second){
        if (    !(  first.x > second.x + second.width ||
                    first.x + first.width < second.x ||
                    first.y > second.y + second.height ||
                    first.y + first.height < second.y)
        ) {
            return true;
        };
    };

    window.addEventListener('resize', function(){
        canvasPosition = canvas.getBoundingClientRect();
    });
}