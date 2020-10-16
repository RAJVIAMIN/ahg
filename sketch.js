
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;

function setup() {
	createCanvas(1000, 675);

	engine = Engine.create();
	world = engine.world;

	boxPosition=width/1-220;
	boxY=610;
	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color("white"); 
	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {
	isStatic:true} );
	World.add(world, boxLeftBody); 
	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color("white");
	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {
	isStatic:true} );
	World.add(world, boxBottomBody); 
	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100); 
	boxleftSprite.shapeColor=color("white");
	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100, {
	isStatic:true} );
	World.add(world, boxRightBody);

	paperObject = new Paper(200,450,40);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();

  drawSprites();
 
}



