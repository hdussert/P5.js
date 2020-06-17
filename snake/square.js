var square = function() {
	this.p = createVector(200,25);
	this.vel = createVector(random(15), 0);
	this.size = 50;
}

square.prototype.move = function() {
	this.p.x += this.vel.x;
	this.p.y += this.vel.y;
	if(this.p.y > 275){
		this.p.y = 275;
		this.vel.y = -this.vel.y / 4;
	}
	if(this.p.y < 275){
		this.vel.y += 1;
	}
	
	if(this.p.x < 0){
		this.vel.x = -this.vel.x;
		this.p.x = 0;
	}
	else if(this.p.x > 400){
		this.vel.x = -this.vel.x;
		this.p.x = 400;
	}
	
	if(this.p.y == 275){
		this.vel.x = this.vel.x * 0.95;
	}
}

square.prototype.jump = function() {
	if(this.p.y == 275){
		this.vel.y = -20;
	}
}
