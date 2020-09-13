
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


	
var b1,b2,b3,b4,p;
var engine,world;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;

 p = new paper(30,360,50);
 b1 = new dustbin(300,680,200,20);
 b2 = new ground(400,690,800,20);
 b3 = new dustbin(350,680,20,200);
 b4 = new dustbin(250,680,20,200);


	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
  b1.display();
  b3.display();
  b4.display();
  p.display();
  b2.display();
 // if(keyCode===UP_ARROW){
 //  p.keypressed;
  //}
 
 //keypressed();
  
}
function keypressed (){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(p.body,p.body.position,{x:85,y:-85});
	}
}


