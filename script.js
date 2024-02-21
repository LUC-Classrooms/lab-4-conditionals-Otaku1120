var x,w;

function setup() {
  createCanvas(320, 240);
  x = width/2;
  w= 100;
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill("red");
   x = width/4;
   w = 50;
    
  }
  else { 
    // otherwise do this:
    fill(0);
    x = width/2;
    w = 100;
  }
  ellipse(x, height/2, w, 100);
}
