var canvas;
var music;
var greenbox, bluebox, redbox,yellowbox, jumpbox;
var edge1, edge2, edge3, edge4 ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   greenbox=createSprite(90,580,160,30);
   greenbox.shapeColor="green";
   bluebox=createSprite(280,580,160,30);
   bluebox.shapeColor="blue";
   redbox=createSprite(470,580,160,30);
   redbox.shapeColor="red";
   yellowbox=createSprite(660,580,160,30);
   yellowbox.shapeColor="yellow";
   jumpbox=createSprite(random(20,750),90,40,40);
   jumpbox.shapeColor="white";
   jumpbox.velocityX= 5;
   jumpbox.velocityY= 5;

   edge1=createSprite(0,300,1,600);
   edge2=createSprite(400,0,800,1);
   edge3=createSprite(800,300,1,600);
   edge4=createSprite(400,600,800,1);

 

   
    //create 4 different surfaces



    //create box sprite and give velocity
  
}

function draw() {
    background(rgb(169,169,169));
   
   
    
    //create edgeSprite
    createEdgeSprites();
    jumpbox.bounceOff(bluebox);
    jumpbox.bounceOff(greenbox);
    jumpbox.bounceOff(redbox);
    jumpbox.bounceOff(yellowbox);
    jumpbox.bounceOff(edge1);
    jumpbox.bounceOff(edge2);
    jumpbox.bounceOff(edge3);
    jumpbox.bounceOff(edge4);

    

    //add condition to check if box touching surface and make it bounce
    if(bluebox.isTouching(jumpbox) && jumpbox.bounceOff(bluebox)){
    jumpbox.shapeColor= "blue" ;
}
    
     drawSprites();
}
