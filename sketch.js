


function drawCorridor(){

var w  = 1000
var h = 1000
var y = 1000
  for (var i = 0; i<7; i++ ){
fill ("black")
stroke("white")
strokeWeight(10)
rectMode(CENTER)
rect(displayWidth/2,100,w,h)
w = w-200
h = h-200
y = y-200


}

line(displayWidth/2-100,200,displayWidth/2-500,600)
line(displayWidth/2+100,200,displayWidth/2+500,600)
line(0,0,0,displayHeight)
line(0,0,(displayWidth-1000)/2,0)
line(displayWidth/2-500,600,0,displayHeight)
line(displayWidth/2+500,600,displayWidth/2+200,displayHeight)
line(displayWidth/2+500,0,displayWidth,0)
line(displayWidth,0,displayWidth,displayHeight)
line(displayWidth/2+500,600,displayWidth,600)




}
function preload(){




}
function setup(){


  createCanvas(displayWidth,displayHeight)

  
}
function draw (){
background("black")
/*fill ("black")
stroke("white")
strokeWeight(10)
rect(0,0,200,200)
rect(0,0,0,0)
rect(0,0,400,400)
rect(0,0,600,600)
rect(0,0,800,800)
*/
drawCorridor();

  drawSprites();
}