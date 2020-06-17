var tree = [];

function setup() {
  createCanvas(800,600);
  //translate(width / 2, height);
  var a = createVector(width / 2, height);
	var b = createVector(width / 2, 450);
	var root = new Branch(a, b);
	tree[0] = root;
}

function draw() {
  background(51);
  for (var i = 0; i < tree.length; i++) {
  	if (!tree[i].finished) {
  		tree[i].grow();
  	}
	tree[i].show();
  }
}
