const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1300;
canvas.height = 600;
function play() {
    // global variables
    const cellSize = 100;
    const cellGap = 3;
    let numberOfResources = 50;
    let enemiesInterval = 800;
    let frame = 0;
    let gameOver = false;
    let score = 0;
    let choose = 1;
    const winningScore = 10000;
    let defenderCost = 100;
    let ten = "súng lục";
    let a = true;

    const gameGrid = [];
    const defenders = [];
    const armors = [];
    const armorsgai = [];
    const enemies = [];
    const enemyPositions = [];
    const projectiles = [];
    const resources = [];
    const flowers = [];
    const defenderlienthanhs = [];
    const defenderxiengiaps = [];
    const boms = [];
    const plants = [];

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
        constructor(x, y, power, xieu){
            this.x = x;
            this.y = y;
            this.width = 10;
            this.height = 10;
            this.power = power;
            this.speed = 5;
            this.xieu = xieu;
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
                    projectiles.push(new Projectile(this.x + 70, this.y + 50, 20, false));
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
    	draw(){
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
    }
    class Bom {
        constructor(x, y) {
            this.x = x;
            this.y = y + cellSize / 2;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize / 2 - cellGap * 2;
            this.health = 1;
        }
        draw(){
            ctx.fillStyle = 'yellow';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
    }
    class DefenderLienthanh {
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
            ctx.fillStyle = 'cyan';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
        update(){
            if (this.shooting){
                this.timer++;
                if (this.timer % 5 === 0){
                    projectiles.push(new Projectile(this.x + 70, this.y + 50, 2, false));
                }
            } else {
                this.timer = 0;
            }
        }
    }
    class DefenderXieu {
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
            ctx.fillStyle = 'lightcyan';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
        update(){
            if (this.shooting){
                this.timer++;
                if (this.timer % 100 === 0){
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
        }
        draw(){
            ctx.fillStyle = 'lightgreen';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
    }
    class Flowers {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.health = 100;
            this.time = 0;
        }
        draw(){
            ctx.fillStyle = 'orange';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gold';
            ctx.font = '30px Orbitron';
            ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        }
        update() {
            this.time++;
            if (this.time % 500 == 0) {
                resources.push(new Resource(this.x, this.y));
            }
        }
    }
    document.addEventListener('keydown', function(e) {
    	
    	if (e.which == 49) {
    		choose = 1;
            ten = "súng lục";
    	}
        else if (e.which == 50) {
            choose = 2;
            ten = "xưởng tiền";
        }
        else if (e.which == 51) {
            choose = 3;
            ten = "bom ngầm";
        }
        else if (e.which == 52) {
            choose = 4;
            ten = "lá chắn";
        }
        else if (e.which == 53) {
            choose = 5;
            ten = "lá chắn gai";
        }
        else if (e.which == 54) {
            choose = 6;
            ten = "súng liên thanh";
        }
        else if (e.which == 55) {
            choose = 7;
            ten = "súng xiên giáp";//console
        }
    });
    canvas.addEventListener('click', function(){
        const gridPositionX = mouse.x  - (mouse.x % cellSize) + cellGap;
        const gridPositionY = mouse.y - (mouse.y % cellSize) + cellGap;
        if (gridPositionY < cellSize) return;
        for (let i = 0; i < plants.length; i++){
            if (plants[i].x === gridPositionX && plants[i].y === gridPositionY) return;
        }
        if (choose == 2) {
            let defenderCost = 50;
            if (numberOfResources >= defenderCost){
                flowers.push(new Flowers(gridPositionX, gridPositionY));
                plants.push(new Flowers(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        else if (choose == 1) {
    	    if (gridPositionY < cellSize) return;
    	    for (let i = 0; i < defenders.length; i++){
    	        if (defenders[i].x === gridPositionX && defenders[i].y === gridPositionY) return;
    	    }
    	    let defenderCost = 100;
    	    if (numberOfResources >= defenderCost){
    	        defenders.push(new Defender(gridPositionX, gridPositionY));
                plants.push(new Defender(gridPositionX, gridPositionY));
    	        numberOfResources -= defenderCost;
    	    }
    	}
    	else if (choose == 4) {
    		if (gridPositionY < cellSize) return;
    	    for (let i = 0; i < armors.length; i++){
    	        if (armors[i].x === gridPositionX && armors[i].y === gridPositionY) return;
    	    }
    	    let defenderCost = 150;
    	    if (numberOfResources >= defenderCost){
    	        armors.push(new Armor(gridPositionX, gridPositionY));
                plants.push(new Armor(gridPositionX, gridPositionY));
    	        numberOfResources -= defenderCost;
    	    }
    	}
        else if (choose == 5) {
            if (gridPositionY < cellSize) return;
            for (let i = 0; i < armorsgai.length; i++){
                if (armorsgai[i].x === gridPositionX && armorsgai[i].y === gridPositionY) return;
            }
            let defenderCost = 300;
            if (numberOfResources >= defenderCost){
                armorsgai.push(new SpikeArmor(gridPositionX, gridPositionY));
                plants.push(new SpikeArmor(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        else if (choose == 6) {
            if (gridPositionY < cellSize) return;
            for (let i = 0; i < defenders.length; i++){
                if (defenders[i].x === gridPositionX && defenders[i].y === gridPositionY) return;
            }
            let defenderCost = 200;
            if (numberOfResources >= defenderCost){
                defenderlienthanhs.push(new DefenderLienthanh(gridPositionX, gridPositionY));
                plants.push(new DefenderLienthanh(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        else if (choose == 7) {
            if (gridPositionY < cellSize) return;
            for (let i = 0; i < defenderxiengiaps.length; i++){
                if (defenderxiengiaps[i].x === gridPositionX && defenderxiengiaps[i].y === gridPositionY) return;
            }
            let defenderCost = 150;
            if (numberOfResources >= defenderCost){
                defenderxiengiaps.push(new DefenderXieu(gridPositionX, gridPositionY));
                plants.push(new DefenderXieu(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }
        else if (choose == 3) {
            if (gridPositionY < cellSize) return;
            for (let i = 0; i < boms.length; i++){
                if (boms[i].x === gridPositionX && boms[i].y === gridPositionY) return;
            }
            defenderCost = 50;
            if (numberOfResources >= defenderCost){
                boms.push(new Bom(gridPositionX, gridPositionY));
                plants.push(new Bom(gridPositionX, gridPositionY));
                numberOfResources -= defenderCost;
            }
        }


    });

    function handleDefenders(){
        for (let i = 0; i < defenders.length; i++){
            for (let j = 0; j < plants.length; j++) {
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
                }
                if (defenders[i] && defenders[i].health <= 0){
                    defenders.splice(i, 1);
                    plants.splice(j, 1);
                    i--;
                    enemies[j].movement = enemies[j].speed;
                }
            }
        }
    }
    function handleDefendersXienGiap(){
        for (let i = 0; i < defenderxiengiaps.length; i++){
            for (let j = 0; j < plants.length; j++) {
            defenderxiengiaps[i].draw();
            defenderxiengiaps[i].update();
            if (enemyPositions.indexOf(defenderxiengiaps[i].y) !== -1){
                defenderxiengiaps[i].shooting = true;
            } else {
                defenderxiengiaps[i].shooting = false;
            }
            for (let j = 0; j < enemies.length; j++){
                if (defenderxiengiaps[i] && collision(defenderxiengiaps[i], enemies[j])){
                    enemies[j].movement = 0;
                    defenderxiengiaps[i].health -= enemies[j].power;
                }
                if (defenderxiengiaps[i] && defenderxiengiaps[i].health <= 0){
                    defenderxiengiaps.splice(i, 1);
                    plants.splice(j, 1);
                    i--;
                    enemies[j].movement = enemies[j].speed;
                }
            }
        }
    }
    function handleDefendersLienthanh(){
        for (let i = 0; i < defenderlienthanhs.length; i++){
            for (let j = 0; j < plants.length; j++) {
                defenderlienthanhs[i].draw();
                defenderlienthanhs[i].update();
                if (enemyPositions.indexOf(defenderlienthanhs[i].y) !== -1){
                    defenderlienthanhs[i].shooting = true;
                } else {
                    defenderlienthanhs[i].shooting = false;
                }
                for (let j = 0; j < enemies.length; j++){
                    if (defenderlienthanhs[i] && collision(defenderlienthanhs[i], enemies[j])){
                        enemies[j].movement = 0;
                        defenderlienthanhs[i].health -= enemies[j].power;
                    }
                    if (defenderlienthanhs[i] && defenderlienthanhs[i].health <= 0){
                        defenderlienthanhs.splice(i, 1);
                        plants.splice(j, 1);
                        i--;
                        enemies[j].movement = enemies[j].speed;
                    }
                }
            }
        }
    }
    function handleFlowers(){
        for (let i = 0; i < flowers.length; i++){
            for (let j = 0; j < plants.length; j++) {
            flowers[i].draw();
            flowers[i].update();
            for (let j = 0; j < enemies.length; j++){
                if (flowers[i] && collision(flowers[i], enemies[j])){
                    enemies[j].movement = 0;
                    flowers[i].health -= enemies[j].power;
                }
                if (flowers[i] && flowers[i].health <= 0){
                    flowers.splice(i, 1);
                    plants.splice(j, 1);
                    i--;
                    enemies[j].movement = enemies[j].speed;
                }
            }
        }
    }
    function handleArmors(){//console
        for (let i = 0; i < armors.length; i++){
            for (let j = 0; j < plants.length; j++) {
            armors[i].draw();
            for (let j = 0; j < enemies.length; j++){
                if (armors[i] && collision(armors[i], enemies[j])){
                    enemies[j].movement = 0;
                    armors[i].health -= enemies[j].power;
                }
                if (armors[i] && armors[i].health <= 0){
                    armors.splice(i, 1);
                    plants.splice(j, 1);
                    i--;
                    enemies[j].movement = enemies[j].speed;
                }
            }
        }
    }
    function handleBoms(){//console
        for (let i = 0; i < boms.length; i++){
            for (let j = 0; j < plants.length; j++) {
            boms[i].draw();
            for (let j = 0; j < enemies.length; j++){
                if (boms[i] && collision(boms[i], enemies[j])){
                    enemies[j].movement = 0;
                    enemies[j].health -= 5;
                    boms.splice(i, 1);
                    plants.splice(j, 1);
                    i--;
                }
            }
        }
    }
    function handleSpikeArmors(){//console
        for (let i = 0; i < armorsgai.length; i++){
            for (let j = 0; j < plants.length; j++) {
            armorsgai[i].draw();
            for (let j = 0; j < enemies.length; j++){
                if (armorsgai[i] && collision(armorsgai[i], enemies[j])){
                    enemies[j].movement = 0;
                    armorsgai[i].health -= enemies[j].power;
                    enemies[j].health -= 1;
                }
                if (armorsgai[i] && armorsgai[i].health <= 0){
                    armorsgai.splice(i, 1);
                    plants.splice(j, 1);
                    i--;
                    enemies[j].movement = enemies[j].speed;
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
    class EnemyManh {
        constructor(verticalPosition){
            this.x = canvas.width;
            this.y = verticalPosition;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.speed = Math.random() * 0.2 + 0.4;
            this.movement = this.speed;
            this.health = 100;
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
    class EnemyBoss {
        constructor(verticalPosition){
            this.x = canvas.width;
            this.y = verticalPosition;
            this.width = cellSize - cellGap * 2;
            this.height = cellSize - cellGap * 2;
            this.speed = Math.random() * 3 + 0.5;
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
            if (frame % 250 === 0 && score >= 6000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemyThuLinh(verticalPosition));
                enemyPositions.push(verticalPosition);
                for (let i = 0; i < 6; i++) {
                    let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                    enemies.push(new Enemy(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
            }
            if (frame % 250 === 0 && score >= 5000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemyManh(verticalPosition));
                enemyPositions.push(verticalPosition);
            }
            if (frame % 1000 === 0 && score >= 8000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemyBoss(verticalPosition));
                enemyPositions.push(verticalPosition);
            }
            if (frame % 2000 === 0 && score >= 9500) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                for (let i = 0; i < 51; i++) {
                    let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                    enemies.push(new Enemy(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
                for (let i = 0; i < 6; i++) {
                    let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                    enemies.push(new EnemyBoss(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
                for (let i = 0; i < 4; i++) {
                    let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                    enemies.push(new EnemyThuLinh(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
                for (let i = 0; i < 6; i++) {
                    let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                    enemies.push(new EnemyManh(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
                for (let i = 0; i < 6; i++) {
                    let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                    enemies.push(new EnemySpeed(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
                for (let i = 0; i < 6; i++) {
                    let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                    enemies.push(new Enemy(verticalPosition));
                    enemyPositions.push(verticalPosition);
                }
            }
            if (frame % 150 === 0 && score >= 2000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemyTrau(verticalPosition));
                enemyPositions.push(verticalPosition);
            }
            if (frame % 200 === 0 && score >= 3000) {
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new EnemySpeed(verticalPosition));
                enemyPositions.push(verticalPosition);
            }
            if (frame % enemiesInterval === 0 && score < winningScore){
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                enemies.push(new Enemy(verticalPosition));
                enemyPositions.push(verticalPosition);
                if (enemiesInterval > 60) enemiesInterval -= 50;
            }
        }
            
        
    }

    // resources
    const amounts = [25];
    class Resource {
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.width = cellSize * 0.6;
            this.height = cellSize * 0.6;
            this.amount = amounts[0];
            this.time = 0;
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
        if (frame % 500 === 0 && score < winningScore){
            let x = Math.random() * (canvas.width - cellSize);
            let y = (Math.floor(Math.random() * 5) + 1) * cellSize + 25;
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

    // utilities
    function handleGameStatus(){
        ctx.fillStyle = 'gold';
        ctx.font = '30px Orbitron';
        ctx.fillText('Điểm: ' + score, 20, 40);
        ctx.fillText('Tiền: ' + numberOfResources, 20, 80);
        ctx.fillText('Công trình bạn chọn: ' + ten, 300, 40);
        ctx.fillText('Quân địch: ' + enemies.length, 300, 80);
        if (gameOver){
            ctx.fillStyle = 'black';
            ctx.font = '90px Orbitron';
            ctx.fillText('TRÒ CHƠI KẾT THÚC', 135, 330);
        }
        if (score >= winningScore && enemies.length === 0){
            ctx.fillStyle = 'black';
            ctx.font = '60px Orbitron';
            ctx.fillText('NHIỆM VỤ HOÀN THÀNH', 130, 300);
            ctx.font = '30px Orbitron';
            ctx.fillText('Bạn thắng với ' + score + ' điểm!', 134, 340);
        }
    }

    function animate(){//s
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'blue';
        ctx.fillRect(0,0,controlsBar.width, controlsBar.height);
        if (frame >= 3000) {
        	handleEnemies();
        }
        handleGameGrid();
        handleBoms();
        handleSpikeArmors();
        handleDefenders();
        handleDefendersLienthanh();
        handleDefendersXienGiap();
        handleArmors();
        handleFlowers();
        handleResources();
        handleProjectiles();
        handleGameStatus();
        frame++;
        
        if (!gameOver) requestAnimationFrame(animate);
    }

    function collision(first, second){
        if (    !(  first.x > second.x + second.width ||
                    first.x + first.width < second.x ||
                    first.y > second.y + second.height ||
                    first.y + first.height < second.y)
        ) {
            return true;
        };
    };
    animate();
    window.addEventListener('resize', function(){
        canvasPosition = canvas.getBoundingClientRect();
    });
}