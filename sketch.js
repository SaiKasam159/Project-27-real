
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ball1 = new Ball(150, 500, 50, 50)
	ball2 = new Ball(200, 500, 50, 50)
	ball3 = new Ball(250, 500, 50, 50)
	ball4 = new Ball(300, 500, 50, 50)

	box = new Topbox(400, 200, 500, 50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
	ball1.display()
	ball2.display()
	ball3.display()
	ball4.display()
	
	box.display()
 // drawSprites();
 
}



