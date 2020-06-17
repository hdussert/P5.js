var gravity;

function Particle(x,y) {
	this.x = x;
	this.y = y;
	
	this.history = [];
	
	this.update = function(){
		var v = createVector(this.x,this.y)
		this.history.push(v);
		
		this.x += random(-5,5);
		this.y += random(0,5);
		

		
		if (this.history.length > 10) {
			this.history.splice(0, 1);
		}
	}
	
	this.show = function(){
		noStroke();
		
		
		for (var i = 0; i < this.history.length; i++) {
			var pos = this.history[i];
			if (i == this.history.length - 1) {
				fill(220,180,100);
				ellipse(pos.x, pos.y, (i*1)+1, (i*1)+1);				
				fill(255,255,100);
				ellipse(pos.x, pos.y, (i*0.67)+1, (i*0.67)+1);
				fill(255,255,255);
				ellipse(pos.x, pos.y, (i*0.33)+1, (i*0.33)+1);

			}
			else {
				fill(250,120,50);
				ellipse(pos.x, pos.y, (i*1.5)+1, (i*1.5)+1);
			}
		}
	}
}