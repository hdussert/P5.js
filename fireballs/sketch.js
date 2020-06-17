var particles = [];
var pressed = false;
var myTimer = 0;

function setup() {
  createCanvas(900,900);
}

function mousePressed() {
	pressed = true;
	particles.push(new Particle(mouseX, mouseY));

}

function mouseReleased(){
	pressed = false;
}

function draw() {
	myTimer += 1;
  background(55);
  print(myTimer);
  for(var i = 0; i < particles.length; i++){
  	particles[i].update();
  	particles[i].show();
  }
  //if (myTimer%15 == 0) { particles.push(new Particle (mouseX, mouseY)) }
  if (pressed) {
  	particles.push(new Particle(mouseX, mouseY));
  	if(particles.length > 50) {
			particles.splice(0, 1);
  	}
  }


}