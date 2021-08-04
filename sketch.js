var path, pathImg;
var runnerImg;
var wall1, wall2;


function preload(){
  //pre-load images
  pathImg = loadImage("path.png")

  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2

  runner = createSprite(200, 200);
  runner.addAnimation("running", runnerImg);
  runner.scale = 0.08;

  wall1 = createSprite(60, 100, 10, 900)
  wall1.visible = false;

  wall2 = createSprite(390, 100, 10, 900)
  wall2.visible = false;

}

function draw() {
  background(0);
  drawSprites()
  runner.x = mouseX;
  if(path.y > 400){
    path.y = height/2;
  }

  runner.collide(wall1);
  runner.collide(wall2);

  

}
