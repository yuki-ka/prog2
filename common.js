// - point --------------------------------------------------------------------
function Point(){
	this.x = 0;
	this.y = 0;
}

Point.prototype.distance = function(p){
	var q = new Point();
	q.x = p.x - this.x;
	q.y = p.y - this.y;
	return q;
};

Point.prototype.length = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Point.prototype.normalize = function(){
	var i = this.length();
	if(i > 0){
		var j = 1 / i;
		this.x *= j;
		this.y *= j;
	}
};

// - character ----------------------------------------------------------------
function Character(){
	this.position = new Point();
	this.size = 0;
}

Character.prototype.init = function(size){
	this.size = size;
};


// - character shot -----------------------------------------------------------
function CharacterShot(){
	this.position = new Point();
	this.size = 0;
	this.speed = 0;
	this.alive = false;
}

CharacterShot.prototype.set = function(p, size, speed){
	this.position.x = p.x;
	this.position.y = p.y;
	this.size = size;
	this.speed = speed;

	this.alive = true;
};

CharacterShot.prototype.move = function(){
	this.position.y -= this.speed;
	if(this.position.y < -this.size){
		this.alive = false;
	}
};


// - enemy --------------------------------------------------------------------
function Enemy(){
	this.position = new Point();
	this.size = 0;
	this.type = 0;
	this.param = 0;
	this.alive = false;
}

Enemy.prototype.set = function(p, size, type){

	this.position.x = p.x;
	this.position.y = p.y;
	

	this.size = size;
	this.type = type;

	this.param = 0;
	
	this.alive = true;
};

Enemy.prototype.move = function(){
	this.param++;

// 	switch(this.type){
// 		case 0:
// 
// 			this.position.x = Math.floor( Math.random() *512);
// 			this.position.y = Math.floor( Math.random() *512);
// 
// 			break;
};


// - enemy shot ---------------------------------------------------------------
function EnemyShot(){
	this.position = new Point();
	this.vector = new Point();
	this.size = 0;
	this.speed = 0;
	this.alive = false;
}

EnemyShot.prototype.set = function(p, vector, size, speed){

	this.position.x = p.x;
	this.position.y = p.y;
	this.vector.x = vector.x;
	this.vector.y = vector.y;
	
	this.size = size;
	this.speed = speed;
	

	this.alive = true;
};

EnemyShot.prototype.move = function(){

	this.position.x += this.vector.x * this.speed;
	this.position.y += this.vector.y * this.speed;
	

	if(
	   this.position.x < -this.size ||
	   this.position.y < -this.size ||
	   this.position.x > this.size + screenCanvas.width ||
	   this.position.y > this.size + screenCanvas.height
	){
		this.alive = false;
	}
};



