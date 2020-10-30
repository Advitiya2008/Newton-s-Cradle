const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var roof1;
var rope1, rope2, rope3, rope4, rope5; 

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof1 = new Roof(600, 100, 600, 50);
  
  ball1 = new Ball(400, 500);
  ball2 = new Ball(500, 500);
  ball3 = new Ball(600, 500);
  ball4 = new Ball(700, 500);
  ball5 = new Ball(800, 500);

	rope1 = new Rope(ball1.body, roof1.body, -200, 0);
  rope2 = new Rope(ball2.body, roof1.body, -100, 0);
  rope3 = new Rope(ball3.body, roof1.body, 0, 0);
  rope4 = new Rope(ball4.body, roof1.body, 100, 0);
  rope5 = new Rope(ball5.body, roof1.body, 200, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-600,y:-600});
  }
}