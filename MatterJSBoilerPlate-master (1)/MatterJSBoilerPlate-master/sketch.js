
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var aliens = [ ]

var ground, groundImg;
function preload(){
	groundImg = loadImage("images/bg.png");
}

function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;

	/*ground = createSprite(400, 400, 1200, 1000);
    ground.addImage(groundImg);
	ground.scale = 1.5
	ground.velocityY = 4;*/
    
    spaceship = new Spaceship(600, 0, 100, 100);
    
    xVel = 0;

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  /*if(ground.y>700){
	  ground.y = 400;
  }*/
  
   if(frameCount%60 === 0){
      aliens.push(new Alien(random(30, 30),10, 10));
   }
    for(var i = 0; i<aliens.length;i++){
		aliens[i].display();
	}
    //drawSprites();
  spaceship.display();
}

function keyPressed(){
	if(keyIsDown === 37){
       spaceship.xVel = -4; 
	}

	if(keyIsDown === 39){
	   spaceship.xVel = 4;
	}
}
