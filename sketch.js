var edges;
var diamondImg,diamond;
var laser1,laser2,laser3;
var thief;
function preload(){
  diamondImg = loadImage("diamond.png")
}
function setup(){
  edges = createEdgeSprites();

   thief = createSprite(30,385,15,15);
   laser1 = createSprite(100, 105,200,5);
   laser2 = createSprite(100, 300,200,5);
   laser3 = createSprite(200, 200,200,5);
   diamond = createSprite(370,30,10,10);

  diamond.addImage(diamondImg);

  diamond.setCollider("rectangle",0,0,50,50);
  diamond.scale = 0.3;
 
  
   laser1.velocityX=-4;
   laser2.velocityX=-4;
   laser3.velocityX=4;

 laser1.shapeColor="red";
 laser2.shapeColor="red";
 laser3.shapeColor="red";
thief.shapeColor="blue";
 
}
function draw() {
  background(0);
 
  
  
    
  createEdgeSprites();
  thief.bounceOff(edges[0]);
  thief.bounceOff(edges[1]);
  thief.bounceOff(edges[2]);
  thief.bounceOff(edges[3]);
  
  laser1.bounceOff(edges[0]);
  laser1.bounceOff(edges[1]);
  laser1.bounceOff(edges[2]);
  laser1.bounceOff(edges[3]);

  laser2.bounceOff(edges[0]);
  laser2.bounceOff(edges[1]);
  laser2.bounceOff(edges[2]);
  laser2.bounceOff(edges[3]);
  
  laser3.bounceOff(edges[0]);
  laser3.bounceOff(edges[1]);
  laser3.bounceOff(edges[2]);
  laser3.bounceOff(edges[3]);
  
   

if (keyDown(UP_ARROW)) {
  thief.velocityY=-2;
  thief.velocityX=0;
}
if (keyDown(DOWN_ARROW)) {
  thief.velocityY=2;
  thief.velocityX=0;
}
if (keyDown(RIGHT_ARROW)) {
  thief.velocityY=0;
  thief.velocityX=2;
}
if (keyDown(LEFT_ARROW)) {
  thief.velocityY=0;
  thief.velocityX=-2;
}
if (thief.isTouching(diamond)) {
  fill("pink");
   textSize(35);
  text("Game Over",130,180);
 
  thief.velocityX=0;
  thief.velocityY=0;
  laser1.velocityX=0;
  laser3.velocityX=0;
  laser2.velocityX=0;
  
  
}
if (thief.isTouching(laser1)||thief.isTouching(laser2)||thief.isTouching(laser3)) {
 thief.x=30;
 thief.y=385;
 thief.velocityX=0;
 thief.velocityY=0;
}
    
  drawSprites();
  }
