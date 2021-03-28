
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
	roof1= new Roof(410,350,355,20,"white")

	bob1= new Bob(395,545,30,"pink");
	bob2= new Bob(450,550,30,"pink");
	bob3= new Bob(520,555,30,"pink");
	bob4= new Bob(342,550,30,"pink");
	bob5= new Bob(280,555,30,"pink");



	string1 = new String(ball5.body,{x:278,y:350})
	string2= new String(ball4.body,{x:340,y:350})
	string3= new String(ball.body,{x:402,y:350})
	string4 = new String(ball2.body,{x:464,y:350})
	string5 = new String(ball3.body,{x:526,y:350})
	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 string1.display();
 string2.display();
 string3.display();
 string4.display();
 string5.display();

 roof1.display();

  
  drawSprites();
 
}


