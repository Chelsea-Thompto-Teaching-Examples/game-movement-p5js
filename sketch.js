let playerA;
let playerB;
let playerC;
let playerD;
let directionA;
let directionB;
let directionD;
let jumpInt = 0;

function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent('sketch-holder');
  playerA = new player(200, 200, 2, 20, 'A');
  playerB = new player(600, 200, 5, 20, 'B');
  playerC = new player(200, 600, 2, 20, 'C');
  playerD = new player(600, 585, 3, 20, 'D');
}

function draw() {
  background(220);
  //Render background and text
  zoneA();
  zoneB();
  zoneC();
  zoneD();
  grid();
  //Zone A movement functions
  playerA.display();
  playerA.move();
  playerA.bound();
  //Zone B movement functions
  playerB.display();
  playerB.bound();
  //Zone C movement functions
  playerC.display();
  playerC.move();
  //Zone D movement functions
  playerD.display();
  playerD.move();
  playerD.bound();
}

//render zone a
function zoneA() {
  noStroke();
  fill(153, 46, 142);
  rect(0,0, width/2, height/2);
  fill(255);
  textSize(24);
  text('Zone A', 20, 37.5);
  textSize(18);
  text('"Snake" type movement:', 20, (height/2)-60);
  textSize(14);
  text('Figure moves constantly and cannot reverse direction.', 20, (height/2)-40);
  text('Use arrow keys to control and ENTER to stop.', 20, (height/2)-20);
}

//render zone b
function zoneB() {
  noStroke();
  fill(153, 110, 46);
  rect(width/2, 0, width/2, height/2);
  fill(255);
  textSize(24);
  text('Zone B', (width/2)+20, 37.5);
  textSize(18);
  text('"Stop and Go" type movement:', (width/2)+20, (height/2)-60);
  textSize(14);
  text('Figure moves each time button is pressed.', (width/2)+20, (height/2)-40);
  text('Use WASD keys to control.', (width/2)+20, (height/2)-20);
}

//render zone c
function zoneC() {
  noStroke();
  fill(46, 153, 57);
  rect(0, height/2, width/2, height/2);
  fill(255);
  textSize(24);
  text('Zone C', 20, (height/2)+37.5);
  textSize(18);
  text('Mouse movement:', 20, (height)-60);
  textSize(14);
  text('Figure moves with cursor.', 20, (height)-40);
  text('Move cursor into box to control.', 20, (height)-20);
}

//render zone d
function zoneD() {
  noStroke();
  fill(46, 89, 153);
  rect(width/2, height/2, width/2, height/2);
  fill(255);
  textSize(24);
  text('Zone D', (width/2)+20, (height/2)+37.5);
  textSize(18);
  text('"Hold and Go" movement + jump:', (width/2)+20, (height)-60);
  textSize(14);
  text('Figure moves while button is pressed.', (width/2)+20, (height)-40);
  text('Use "j" to jump and "h" and "k" to move left and right.', (width/2)+20, (height)-20);
  stroke(0);
  strokeWeight(10);
  line((width*0.5),(height*0.75), (width), (height*0.75));
}

//render grid
function grid() {
  stroke(0);
  strokeWeight(10);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  noFill();
  rect(5, 5, width-10, height-10);
}

//handle keyboard inputs
function keyPressed() {
  //zone a controls
  switch (keyCode) {
    case LEFT_ARROW:
      if (directionA !== 'right') {
        directionA = 'left';
      }
      break;
    case RIGHT_ARROW:
      if (directionA !== 'left') {
        directionA = 'right';
      }
      break;
    case DOWN_ARROW:
      if (directionA !== 'down') {
        directionA = 'up';
      }
      break;
    case UP_ARROW:
      if (directionA !== 'up') {
        directionA = 'down';
      }
      break;
    case ENTER:
      directionA = 'still';
      break;
  }
  //zone b controls
  switch (key) {
    case 'a':
      directionB = 'left';
      playerB.move();
      break;
    case 'd':
      directionB = 'right';
      playerB.move();
      break;
    case 'w':
      directionB = 'up';
      playerB.move();
      break;
    case 's':
      directionB = 'down';
      playerB.move();
      break;
    //zone d controls
    case'j':
      jumpInt = 1;
      break;
    case 'h':
      directionD = 'left';
      break;
    case 'k':
      directionD = 'right';
      break;
  }
}

//used only for zone d movement
function keyReleased() {
  if (key == 'h') {
    if (directionD == 'left') {
    directionD = 'still';
    }
  } else if (key == 'k' ){
    if (directionD == 'right') {
    directionD = 'still';
    }
  }
}
