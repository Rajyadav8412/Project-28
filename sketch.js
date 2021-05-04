
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var ball;
var dustbin1,dustbin2,dustbin3;
var ground;
var binImg,dustbin;
var launcher1;

function preload()
{
  binImg=loadImage("dustbin.png");	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
     
	

    dustbin=createSprite(550,400,30,30);
	dustbin.addImage(binImg);
	dustbin.scale=1.1;

	//Create the Bodies Here.
    
	
	
	
	dustbin1 = new bin(400,410,15,320);
	dustbin2 = new bin(550,560,320,15);
	dustbin3 = new bin(700,410,15,320);
	ground = new Ground(400,570,800,20);

	ball = new paper(100,400,100);

	launcher1 = new launcher(ball.body,{x:150,y:100});

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  dustbin.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  
  ground.display();
  
  ball.display();
  launcher1.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher1.fly();
}

