var oldManImg,oldMan,obstacle,ground,groundImg
var backgroundImg,bg
var PLAY = 1
var END = 0
var gameState = PLAY
var virus , virus1 , virus2
var score 
var invisibleGround
 var deathCount = 5
function preload(){
 oldManImg = loadImage("images/old_man_1-removebg-preview.png") 
  
  virus = loadImage("images/v1.jpg")
  virus1 = loadImage("images/v2.jpg")
  virus2 = loadImage("images/v3.jpg")
  backgroundImg = loadImage("images/imgonline-com-ua-twotoone-35Zrl8inSI.jpg")
  lifeline1 = loadImage("images/vitamins.jpeg")
  lifeline2 = loadImage("images/mask.jpg")
  lifeline3 = loadImage("images/handwash.jpeg")
  groundImg = loadImage("images/ground.png")

}





function setup() {
  createCanvas(600, 200);
  bg = createSprite(200,100,400,20)
  bg.addImage ("ground",backgroundImg)
  oldMan=createSprite(50,150,20,50)
  oldMan.addImage("oldMan1",oldManImg)
  oldMan.scale = 0.3
  ground=createSprite(300,180,600,50)
  ground.addImage("ground2",groundImg)
ground.scale = 0.2  
invisibleGround=createSprite(300,200,600,20)
    
  spawnGermsGroup = createGroup();
  cloudsGroup = createGroup
  
  
}


function draw() {
  background(backgroundImg);
   
  bg.velocityX = -3
  
 if (bg.x < 0){
      bg.x = 200;
    }
    
    
 if(spawnGermsGroup.isTouching(oldMan)){
    deathCount = deathCount - 1
    if(deathCount === 0 )
    { gameState = END;}}
   
//     if (gameState===PLAY){
//       score = score + Math.round(getFrameRate()/60);
//       ground.velocityX = -(6 + 3*score/100);
      
//       if((keyDown("space")) && oldMan.y  >= height-120) {
        
//         oldMan.velocityY = -10;
//       }
      
//       oldMan.velocityY = oldMan.velocityY + 0.8
   ground.velocityX = -3 
  if (ground.x < 0){
         ground.x = 200;
       }
    
//       oldMan.collide(invisibleGround);
//       spawnClouds();
//       spawnGerms();
      
    
      
//      if (gameState === END) {
      
      
//       //set velcity of each game object to 0
//       ground.velocityX = 0;
//       oldMan.velocityY = 0;
//       spawnGermsGroup.setVelocityXEach(0);
//       cloudsGroup.setVelocityXEach(0);
      
     
     
      
//       //set lifetime of the game objects so that they are never destroyed
//       spawnGermsGroup.setLifetimeEach(-1);
//       cloudsGroup.setLifetimeEach(-1);
//     }
    
    
// }
if(keyDown("space" ) && oldMan.y>= 145){
  oldMan.velocityY = -8
}
oldMan.velocityY = oldMan.velocityY + 0.5
console.log(oldMan.y)

oldMan.collide(invisibleGround)
drawSprites();  
spawnGerms();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 170 === 0) {
    var cloud = createSprite(width+20,height-300,40,10);
   
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: cloud.addImage(lifeline1);
              break;
      case 2: cloud.addImage(lifeline2);
              break;
      case 3: cloud.addImage(lifeline3)
      default: break;
    }

    cloud.scale = 0.5;
    cloud.velocityX = -3;

    cloud.depth = oldMan.depth;
    oldMan.depth += 1
  
  
}}

function spawnGerms() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,150,20,30);
    obstacle.setCollider('circle',0,0,45)
    // obstacle.debug = true
  
    obstacle.velocityX = -(6 +3 /100);
    
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(virus2);
              break;
      case 2: obstacle.addImage(virus);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
    obstacle.depth = oldMan.depth;
    oldMan.depth += 1}}
  