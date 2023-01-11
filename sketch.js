var sea.png;
function preload(){

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("white");
    drawSprites();

  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation();

  spriteName.addImage(seaImg)
  
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}
