
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1, boxImage;

var paper1, paperImage;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600, 700, 1200, 50);

  paper1 = new Paper(200, 500, 70);
  
  dustbin1 = new Dustbin(800, 660, 200, 20);
  dustbin2 = new Dustbin(700, 620, 20, 100);
  dustbin3 = new Dustbin(900, 620, 20, 100);
  console.log(paper1);

	Engine.run(engine);
}


function draw() {
  background(180);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 85, y: -85});
  }
}

