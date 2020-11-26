
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var tree;
var ground;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var elastic;

function preload()
{
	boyImg = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1200, 570);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(250, 495, 20, 20);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
	ground = new Ground(600, 560, width, 10);

	tree = new Tree(800, 375, 1, 100);

	stone = new Stone(200, 200, 40, 40);

	mango1 = new Mango(670, 230, 30, 30);
	mango2 = new Mango(740, 270, 30, 30);
	mango3 = new Mango(520, 310, 30, 30);
	mango4 = new Mango(640, 300, 30, 30);
	mango5 = new Mango(840, 240, 30, 30);
	mango6 = new Mango(800, 320, 30, 30);
	mango7 = new Mango(950, 290, 30, 30);
	mango8 = new Mango(1070, 325, 30, 30);

	elastic = new Elastic(stone.body, {x:195, y:440});


	Engine.run(engine);
  
}


function draw() {
  background(255);
  
  ground.display();

  tree.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  elastic.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    elastic.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:195 , y:440});
		elastic.attach(stone.body);		
	}
}


function detectCollision(object1, object2){ 
	object1Pos=object1.body.position; 
	object2Pos=object2.body.position;
	var distance = dist(object1Pos.x, object1Pos.y, object2Pos.x, object2Pos.y); 
	if (distance <= object1.width/2 + object2.r ){
		 Matter.Body.setStatic(object2.body, false); 
	}
}
