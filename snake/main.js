var block;
var snake;
var time = 0;
var fruit;
var keyDir;

function setup(){
	createCanvas(400, 400);
	//noStroke();
	fruit = new Block(10,10,10);
	snake = new Snake();
}

function draw(){
	time += 1;
	background(150);
	snake.drawSnake();
	if(time%4 == 0){
		snake.dir = keyDir;
		snake.move();
		if(snake.head.i == fruit.i && snake.head.j == fruit.j){
			snake.body.push(new Block(snake.body[0].i-1, snake.body.j,10))
		}
	}
	fruit.drawIt();
} 

function keyPressed() {
  if (keyCode === LEFT_ARROW && snake.dir != 'right') {
    keyDir = 'left';
  } else if (keyCode === RIGHT_ARROW && snake.dir != 'left') {
    keyDir = 'right';
  } else if (keyCode === UP_ARROW && snake.dir != 'down') {
    keyDir = 'up';
  } else if (keyCode === DOWN_ARROW && snake.dir != 'up') {
    keyDir = 'down';
  }
}