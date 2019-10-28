let snake;
let rez = 20;
let food;
let w;
let h;


function setup() {
  let canvas =  createCanvas(600, 600);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(9);
  snake = new Snake();
  foodLocation();
canvas.parent('sketch-holder');
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
  
}

function keyPressed() {
  //todo: constraint backward direction. 
  //todo: snipes mobile
  if(keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
  	snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
  	snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
  	snake.setDir(0, -1);
  } else if (key == ' ') {
  	snake.grow();
  }

}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
     foodLocation();
  }
  snake.update();
  snake.show();
  
  
  if (snake.endGame()) {
  	print("END GAME");
	background(255, 0, 0);
	noLoop();
	//todo restart game. when cliecked restart
  }
  
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

