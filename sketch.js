var fixedrect, movingrect

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 100);
  fixedrect.shapeColor = "blue"

  movingrect = createSprite(400, 200, 100, 50);
  movingrect.shapeColor = "blue"
  //movingrect.debug = true
}

function draw() {
  background(255,255,255);  

movingrect.x = World.mouseX
movingrect.y = World.mouseY

if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
  && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
  && movingrect.y - fixedrect.y < fixedrect.width/2 + movingrect.width/2
  && fixedrect.y - movingrect.y < fixedrect.width/2 + movingrect.width/2){
    movingrect.shapeColor = "yellow"
    fixedrect.shapeColor = "yellow"
  }
else{ movingrect.shapeColor = "blue"
fixedrect.shapeColor = "blue"}
  drawSprites();
}