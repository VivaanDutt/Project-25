
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1, boxImage;

var paper1, paperImage;

function preload()
{
  paperImage = loadImage("paper.png");
  boxImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600, 700, 1200, 50);

	paper1 = new Paper(200, 500, 70);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);  
  keyPressed(); 
  background(0);
  fill("red");
  rect(800, 660, 200, 20);
	rect(700, 620, 20, 100);
  rect(900, 620, 20, 100);
  noFill(); 
  paper1.display();
  ground.display();
  keyPressed();
  box1.addImage(boxImage);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 85, y: -20});
  }
}

