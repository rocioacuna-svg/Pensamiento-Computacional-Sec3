function setup() {
  createCanvas(700,1000);
}

function draw() {
  // Fondo verde agua 
  background(51, 137, 99,10);
  
  // puse esto mas que nada como para experimentar y porque el fondo lo sentia muy plano 
  
  noStroke()
 
  push()
  translate(50, 60);
  rotate(frameCount / 30);
  fill(46, 136, 101,25);
  ellipse (90,70,600);
  pop();
  
  push()
  translate(0,0);
  rotate (frameCount/ 35);
  fill(0, 103, 43, 25);
  ellipse(181,271,600);
  pop();
  
  push()
  translate(730,20);
  rotate (frameCount/ 35);
  fill(105, 163, 87, 25);
  ellipse(181,271,600);
  pop();
  
   push()
  translate(700,1100);
  rotate (frameCount/ 35);
  fill(32, 128, 90, 25);
  ellipse(181,271,500);
  pop();
  
   push()
  translate(0,1100);
  rotate (frameCount/ 35);
  fill( 11, 124, 94,25);
  ellipse(181,271,600);
  pop();
  
  //un cuarto de circulo celeste
  stroke(9)
  strokeWeight(1)
  fill(189, 227, 218)
  arc(310, 400, 490, 490, -HALF_PI, 0);
  
  // medio circulo naranjo
  fill(213, 95, 5)
  arc(310, 313, 260, 450, HALF_PI, PI + HALF_PI)
  
  //rectangulo amarillo 
  stroke(9)
  strokeWeight(1)
  fill(249, 244, 175)
  rect(280, 155, 30, 248)
  
  noStroke()
  
  //un cuarto de circulo rosado
  stroke(9)
  strokeWeight(1)
  fill(221, 181, 163)
  arc(310, 400, 490, 490, 0, HALF_PI);
  noStroke()
  
  // rectangulo pequeño rosado / detras
  fill(220,140,146)
  rect(280, 500, 30, 99)
  
  // un cuarto de circulo naranjo fuerte LO MAS DIFICIL HASTA AHORA
  fill(202, 60, 6)
   arc(310, 530, 60, 15, HALF_PI, PI);
   
  // rectangulo naranjo fuerte
  fill(202, 60, 6)
  rect(280, 400, 30, 130)
  
  // ojo negro 
  fill(67, 144, 165)
  ellipse(395, 299, 34, 34);
  fill(21,27,28)
  ellipse(395, 299, 27, 27);
  
  // linea negra, /primera parte
  stroke('rgb(7,7,7)');
  strokeWeight(7);
  strokeCap(SQUARE)
  line(130, 570, 310, 570);
  
  //linea verde, /parte dos
  stroke('#17511A');
  strokeWeight(7);
  strokeCap(SQUARE)
  line(280, 570, 310, 570);
  
  //rectangulo pequeño rosado oscuro de abajo
  noStroke()
  fill(192, 97, 88)
  rect(280, 573, 30, 25)
  
  //rectangulo pequeño burdeo
  fill(94, 5, 7)
  rect(280, 598, 30, 17)
  
  // linea naranja 
  stroke('#A52D02');
  strokeWeight(17);
  strokeCap(SQUARE)
  line(175, 607, 280, 607);
  
  // rectangulo naranjo oscuro 
  noStroke()
  fill(175,78,26)
  rect(280, 615, 30, 30);
  
  // triangulo amarillo
  fill(206, 196, 115)
  triangle(176, 770, 310, 770, 310, 643);
  
  //rectangulo amrillo de abajo
  fill(206, 196, 115)
  rect(176, 770, 134, 121)
  
  // triangulo pequeño negro
  fill(9, 11, 10)
  triangle(310, 714, 310, 644, 420, 714);
  
  // cuadrado negro/ abajo del triangulo negro
  fill(9, 11, 10)
  rect(310, 714, 40, 30)
  
  //rectangulo negro horizontal
  fill(9, 11, 10)
  rect(310, 742, 138, 45)
  
  // rectangulo vertical mas delgado negro
  fill(9,11,10)
  rect(310, 786, 27, 43)
  
  //rectangulo horizontal inferior negro
  fill(9,11,10)
  rect(310, 828, 115, 63)
  
  //linea vertical superior negra
  stroke('rgb(7,7,7)');
  strokeWeight(8);
  strokeCap(SQUARE)
  //    x     y   x    y  /guia
  line(590, 30, 590, 177);
  noStroke()
  
  // linea horizontal negra superior
  stroke(0);
  strokeWeight(9);
  strokeCap(SQUARE)
  line(660, 173, 586, 173);
  noStroke()
  
  // rectangulo negro verdoso superior 
  fill(9,60,10)
  rect(594, 84, 45, 16)
  
  // linea amrilla fina superior horizontal
  stroke(206, 196, 115);
  strokeWeight(2);
  strokeCap(SQUARE)
  line(665, 60, 594, 60);
  noStroke()
  
  //recatangulo gris inferior
  stroke(9)
  strokeWeight(1)
  fill(128, 110, 91)
  rect(50, 900, 30, 50);

  //linea cafe entre circulos 
  stroke(106, 56, 17);
  strokeWeight(4);
  strokeCap(SQUARE)
  line(555, 401, 280, 401);
  noStroke()
}
 
} 
