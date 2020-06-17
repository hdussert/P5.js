var s = 2.5;

function Particle(x,y) {
	this.x = x;
	this.y = y;

	this.angle = random(360);
	this.speed = (s*20) * 0.1;

	this.history = [];
	this.tail = (random(2)+3)*2;
	this.col = shuffle([201, 144, 40], false);
	
	this.update = function(){
		var v = createVector(this.x,this.y)
		this.history.push(v);
		if (this.history.length > this.tail)
			this.history.splice(0, 1);

		this.x += this.speed * cos(this.angle);
		if (this.x > 810)
			this.x = -10;
		else if (this.x < -10)
			this.x = 810;

		this.y += this.speed * sin(this.angle);
		if (this.y > 810)
			this.y = -10;
		else if (this.y < -10)
			this.y = 810;

		this.angle += random(20)- 10;
		if(this.angle >= 360) 
			this.angle = this.angle % 360;
		if(this.angle < 0) 
			this.angle = 360 + this.angle;
	}
	
	this.show = function(){
		ellipseMode(CENTER);
		var iLast = this.history.length - 1;
		var lastElmt = this.history[iLast];
		noStroke();

		for (var i = 0; i < this.history.length; i++){
			var pos = this.history[i];
			fill(0);
			ellipse(pos.x, pos.y, (i*s)+4, (i*s)+4);
		}
		for (var i = 0; i < this.history.length; i++) {
			var pos = this.history[i];
			fill(this.col[0],this.col[1],this.col[2]);
			ellipse(pos.x, pos.y, (i*s)+1, (i*s)+1);	
			fill(0,200);
			ellipse(pos.x, pos.y, (i*(s*2)/3)+1, (i*(s*2)/3)+1);
		}
		stroke(0);
		strokeWeight(1);
		fill(255,200);
		ellipse(lastElmt.x, lastElmt.y, iLast*(s * 4/5), iLast* (s * 4/5));

		noStroke();
		fill(20);
		ellipse(lastElmt.x + (iLast*(s/3))*cos(angle(this.x,this.y,mouseX,mouseY))/1.5,
				lastElmt.y + (iLast*(s/3))*sin(angle(this.x,this.y,mouseX,mouseY))/1.5,
				(iLast*(s/3)), (iLast*(s/3)));
	}

	this.wtf = function (){
		var mouseA = angle(this.x, this.y, mouseX, mouseY);
		//strokeWeight(0.5);
		//stroke(this.col[0],this.col[1],this.col[2],50);
		//line(this.x, this.y, mouseX, mouseY);
		//strokeWeight(1);

		if(this.angle <= 180)
			if(mouseA <= this.angle+180)
				this.angle -= (this.angle - mouseA)*0.1;
			else this.angle -= (this.angle + (360-mouseA))*0.1;
		else 
			if(mouseA <= this.angle-180)
				this.angle += ((360-this.angle) + mouseA)*0.1;
			else this.angle += (mouseA - this.angle)*0.1;			
	}
}

function angle (cx, cy, ex, ey){
	var dy = ey - cy;
	var dx = ex - cx;
	var theta = Math.atan2(dy,dx);
	theta *= 180 / PI;
	if(theta < 0){
			theta+=360;
		}
	return theta;
}