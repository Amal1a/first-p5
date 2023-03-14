function setup() {
  //Fullscreen
  //createCanvas(windowWidth, windowHeight);

  //Inside a parent element
  // const canvas = createCanvas(700, 700);
  const canvas = createCanvas(1512, 982);
  canvas.parent("sketch-holder");

  //basic setup
  frameRate(40);
  background(0, 0, 200);
  fill("lightblue");
}

//A helper, getRandInt(10,0) gives us a random number between 10 and 0
function getRandInt(max, min = 0) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function draw() {
  //clear();
  // fill("blue");
  // square(300, 300, 200);
  fill(getRandInt(255), getRandInt(255), getRandInt(255));
  circle(getRandInt(width), getRandInt(height), getRandInt(150));
}
function mouseDragged() {
  //mouseX
  //mouseY
  // fill(getRandInt(255), getRandInt(255), getRandInt(255));
  // square(mouseX, mouseY, 50);
}
function mouseMoved() {
  //mouseX
  //mouseY
}
function mouseClicked() {
  //mouseX
  //mouseY
}

/* ------ */
// let x = 0;
// let y = 100;
// let yModifier = 5;
// let xModifier = 5;

//function draw() {
// //clear();
// x += 5;
// y += 5;
// if (y + 100 > height) {
//   //y-=5;
//   yModifier = yModifier * -1;
// }
// if (y + 100 > width) {
//   //y-=5;
//   xModifier = xModifier * -1;
// }
// if (y < 0) {
//   //y-=5;
//   yModifier = yModifier * -1;
// }
// if (x < 0) {
//   //y-=5;
//   xModifier = xModifier * -1;
// }
// console.log(y, height);
// fill("hotpink");
// square(x, y, 100);
// if (keyIsDown(UP_ARROW)) {
//   //
//   y = y - 5;
// }
// if (keyIsDown(DOWN_ARROW)) {
//   //
//   y = y + 5;
// }
// if (keyIsDown(LEFT_ARROW)) {
//   //
//   y = x - 5;
// }
// if (keyIsDown(RIGHT_ARROW)) {
//   //
//   y = x + 5;
// }
//}

// function keyPressed() {
//   if (keyIsDown(UP_ARROW)) {
//     //

//   }
// }
