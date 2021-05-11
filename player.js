/*
Code for the Player class.
Contains the constructor and all functions.
*/

class player {
  
/*
The constructor function inside of a class creates the instance of the object
itself. You can think of it as a setup() function for the Ufo class only. It is 
where you will convert the passed in parameters into local varibles. 
*/
  
//Function to setup player class.
//Type is used to indicate movement type and bounds.
  constructor(xpos, ypos, speed, size, type) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.speed = speed;
    this.size = size;
    this.type = type;
  }
  
//draw player
  display() {
    ellipseMode(CENTER);
    fill(185);
    noStroke();
    ellipse(this.xpos, this.ypos, this.size);
  }
  
//move player, dependant on player zone
  move() {
    //zone a
    if (this.type === 'A') {
      switch (directionA) {
        case 'right':
          this.xpos = this.xpos + this.speed;
          break;
        case 'up':
          this.ypos = this.ypos + this.speed;
          break;
        case 'left':
          this.xpos = this.xpos - this.speed;
          break;
        case 'down':
          this.ypos = this.ypos - this.speed;
          break;
        case 'still':
          break
      }
      //zone b
    } else if (this.type === 'B') {
      switch (directionB) {
        case 'right':
          this.xpos = this.xpos + this.speed;
          break;
        case 'up':
          this.ypos = this.ypos - this.speed;
          break;
        case 'left':
          this.xpos = this.xpos - this.speed;
          break;
        case 'down':
          this.ypos = this.ypos + this.speed;
          break;
        case 'still':
          break
      }
      //zone c
    } else if (this.type === 'C') {
      if (mouseX > 20 && mouseX < (width/2)-15) {
        if (mouseY > (height/2)+15 && mouseY < height-20) {
          this.xpos = mouseX;
          this.ypos = mouseY;
        }
      }
      //zone d
    } else if (this.type === 'D') {
      switch (directionD) {
        case 'right':
          this.xpos = this.xpos + this.speed;
          break;
        case 'left':
          this.xpos = this.xpos - this.speed;
          break;
        case 'still':
          break
      }
      //jump controls
      if (jumpInt == 1) {
        this.ypos = this.ypos - this.speed;
        if (this.ypos < 540) {
          jumpInt = 2;
        }
      } else if (jumpInt == 2) {
        this.ypos = this.ypos + (this.speed*1.5);
        if (this.ypos > 584) {
          jumpInt = 3;
        } 
      } else if (jumpInt ==3) {
          this.ypos = 585;
        }
      }
  }

//limit player movement, dependent on zone
  bound() {
    //zone a
    if (this.type === 'A') {
      if (this.xpos > (width/2)-15) {
        this.xpos = this.xpos - 5;
      }
      if (this.xpos < 20) {
        this.xpos = this.xpos + 5;
      }
      if (this.ypos > (height/2)-15) {
        this.ypos = this.ypos - 5;
      }
      if (this.ypos < 20) {
        this.ypos = this.ypos + 5;
      }
      //zone b
    } else if (this.type === 'B') {
      if (this.xpos > (width)-20) {
        this.xpos = this.xpos - 5;
      }
      if (this.xpos < (width/2)+15) {
        this.xpos = this.xpos + 5;
      }
      if (this.ypos > (height/2)-15) {
        this.ypos = this.ypos - 5;
      }
      if (this.ypos < 20) {
        this.ypos = this.ypos + 5;
      }
      //zone c
    } else if (this.type === 'C') {
      if (this.xpos > (width/2)-20) {
        this.xpos = this.xpos - 10;
      }
      if (this.xpos < 20) {
        this.xpos = this.xpos + 10;
      }
      if (this.ypos > (height)-15) {
        this.ypos = this.ypos - 10;
      }
      if (this.ypos < (height/2)+30) {
        this.ypos = this.ypos + 10;
      }
      //zone d
    } else if (this.type === 'D') {
      if (this.xpos > (width)-20) {
        this.xpos = this.xpos - 5;
      }
      if (this.xpos < (width/2)+15) {
        this.xpos = this.xpos + 5;
      }
    }
  }
 }