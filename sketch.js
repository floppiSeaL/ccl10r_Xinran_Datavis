let data;
let poses;
let a = [8,8,6,12,12,11,6,7,7,11];
let b = [10,6,12,14,11,13,5,5,9,5];

function preload(){
  data = loadJSON("pose.json");
 }


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(200);

  for (let i = 0; i < data.bodypoints.length; i++) {
    let poses= data.bodypoints;
    let posX = poses[i].x;
    let posY = poses[i].y;
    fill(0)
    stroke(10)
    circle(posX,posY,10)
    let name = poses[i].part;
    text(name, posX-20,posY-20)
   
  }
    let x1 = poses[a].x;
    let y1 = poses[a].y;
    let x2 = poses[b].x;
    let y2 = poses[b].y;

    stroke(0)
    strokeWeight(10)
    line(x1,y1,x2,y2)
  
}

