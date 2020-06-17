class Block {
	constructor(i,j,size){
		this.i = i;
		this.j = j;
		this.x = i*size;
		this.y = j*size;
		this.size = size;
	}
	
	drawIt(){
		fill(255);
		rect(this.x,this.y,this.size, this.size);
	}
}

class Snake{
	constructor(){
		this.body = [];
		this.body[0] = new Block(5,5,10);
		this.body[1] = new Block(5,6,10);
		this.body[2] = new Block(5,7,10);
		this.head = this.body[this.body.length -1];
		this.dir = 'down';
	}
	
	drawSnake(){
		for(var i = 0; i < this.body.length; i++){
			this.body[i].drawIt();
		}
	}
	move(){
		if(this.dir == 'down'){
			this.body.push(new Block(this.head.i, this.head.j+1, 10));
			this.head = this.body[this.body.length-1];
			this.body.splice(0,1);
		} 
		else if(this.dir == 'up'){
			this.body.push(new Block(this.head.i, this.head.j-1, 10));
			this.head = this.body[this.body.length-1];
			this.body.splice(0,1);			
		}
		else if (this.dir == 'left'){
			this.body.push(new Block(this.head.i-1, this.head.j, 10));
			this.head = this.body[this.body.length-1];
			this.body.splice(0,1);			
		} else {
			this.body.push(new Block(this.head.i+1, this.head.j, 10));
			this.head = this.body[this.body.length-1];
			this.body.splice(0,1);			
		}
	}
}