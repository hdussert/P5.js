var particles = [];
var pressed = false;
var myTimer = 0;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function mousePressed() {
	pressed = true;
}

function mouseReleased(){
	pressed = false;
}

function draw() {
	myTimer += 1;
  background(100);
  if (keyIsDown(32))
    particles.push(new Particle(mouseX, mouseY));
    if(particles.length > 15)
      particles.splice(0, 1);

  if (keyIsDown(DOWN_ARROW))
    for(var i = 0; i < particles.length; i++)
      particles[i].speed *= 0.9;   
  if (keyIsDown(UP_ARROW))
    for(var i = 0; i < particles.length; i++)
      particles[i].speed += 0.1;  
  
  if (pressed)
    if (mouseButton == LEFT)
      for(var i = 0; i < particles.length; i++)
        particles[i].wtf();

      
  for(var i = 0; i < particles.length; i++){
  	particles[i].update();
  	particles[i].show();
  } 
}