var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, dropOffZone1, dropOffZone2, dropOffZone3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	dropOffZone1=createSprite(300,610,20,100);
	dropOffZone1.shapeColor=("red");

	dropOffZone2=createSprite(400,650,200,20);
	dropOffZone2.shapeColor=("red");

	dropOffZone3=createSprite(500,610,20,100);
	dropOffZone3.shapeColor=("red");
	


	engine = Engine.create();
	world = engine.world;
	push();

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	dropOffZone2 = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
	World.add(world, dropOffZone2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
		Matter.Body.setStatic(packageBody,false);
		 
		 package.scale = 1;
	 
	  package.visible = false;
	  }
}

