
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1, line2, line3;
var ground;
var paperObject;

function preload() {

}

function setup() {
	createCanvas(1100, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	line1 = new Line(990, 380, 200, 10);
	line2 = new Line(1090, 345, 10, 80);
	line3 = new Line(890, 345, 10, 80);

	ground = new Ground(550, 390, 1100, 10);
	paperObject = new Ball(100, 380, 15);
	
	keyPressed();

	Engine.run(engine);

}s


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(0);

	ground.display();

	paperObject.display();

	line1.display();
	line2.display();
	line3.display();

	
	drawSprites();


}

function keyPressed(){
if(keyCode === UP_ARROW){
Body.applyForce(paperObject.object,paperObject.object.position,{x:5,y:-5})
}




}

