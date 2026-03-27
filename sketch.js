function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  fill(200,0,100);
  circle(300, 200, 300);
  fill(0,0,0)
  circle(340, 155, 25);
  circle(250, 155, 50);
  
  strokeWeight(10);
  line(220, 90, 280, 110);
  
  triangle(30, 200, 200, 20, 86, 75);
    ellipse(300, 250, 90, 40);  
}