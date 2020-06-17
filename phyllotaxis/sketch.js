var sz = 1;
var mid;
var pos;
var rot = 0;
var col1;
var col2;
var col3;

function setup() {
	noStroke();
	createCanvas(800,800);
	angleMode(DEGREES);
	background(55);
  	sz = 1;
  	mid = height / 2;
}

function draw() {
	col1 = sin(rot) * 127 + 128;
	col2 = sin(rot + 120) * 127 + 128;
	col3 = sin(rot + 240) * 127 + 128;
	fill(col1, col2, col3);
	pos = (mid - 0.5);
	translate(pos, pos);
	rotate(rot);
  	ellipse(-sz/2,-sz/2, sz/2, sz/2);  
  	sz *= 1.005;
  	rot = (rot + 137.5) % 360;
}