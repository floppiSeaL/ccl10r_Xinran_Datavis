let data;
let poses;
let a = [8, 8, 6, 12, 12, 11, 6, 7, 7, 11, 14, 13];
let b = [10, 6, 12, 14, 11, 13, 5, 5, 9, 5, 16, 15];

function preload() {
  data = loadJSON("pose.json");
}


function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(200);
  stroke(0)
  strokeWeight(2)
  noFill()
  circle(290, 90, 60)
  circle(290, 100, 10)
  for (let i = 0; i < data.bodypoints.length; i++) {
    poses = data.bodypoints;
    let posX = poses[i].x;
    let posY = poses[i].y;
    fill(0)
    stroke(10)

    circle(posX, posY, 4)


  }

  for (let j = 0; j < 13; j++) {
    console.info('calling drawline with', a[j], b[j])
    drawline(a[j], b[j])
    // drawline(8, 10)
    // drawline(8, 6)
  }
  noLoop();

}

function drawline(a, b) {
  console.info('drawline called with a=', a, 'b=', b)
  console.info('computing poses[', a, ']')
  let x1 = poses[a].x;
  let y1 = poses[a].y;
  let x2 = poses[b].x;
  let y2 = poses[b].y;

  stroke(0)
  //strokeWeight(6)
  line(x1, y1, x2, y2)
}