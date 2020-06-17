function Branch (begin, end) {
	this.begin = begin;
	this.end = end;
	this.len = 0;
	this.finished = false;
	
	this.grow = function() {
		if (this.len >= 1) {
			this.finished = true;
			if (tree.length < 512) {
				tree.push(this.branchA());
				tree.push(this.branchB());
			}
		}
		else { this.len += 0.02; };
	}
	
	this.show = function() {
		stroke(255);
		var tmp = p5.Vector.sub(this.end, this.begin)
		line(this.begin.x, this.begin.y, (this.begin.x + (this.len * tmp.x)), (this.begin.y + (this.len * tmp.y)));
	}
	
	this.branchA = function() {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(PI / 5);
		dir.mult(0.6);
		var newEnd = p5.Vector.add(this.end, dir);
		var a = new Branch(this.end, newEnd);
		return a;
	}
	
	this.branchB = function() {
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(-PI / 5);
		dir.mult(0.6);
		var newEnd = p5.Vector.add(this.end, dir);
		var b = new Branch(this.end, newEnd);
		return b;
	}	
}