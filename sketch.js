/// <reference path="./libraries/p5.global-mode.d.ts" />

/**
 * Creates a button object that contains the location, dimensions, and a draw method
 */
class Button {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  /**
   * Calls the rect method and draws the rectangle
   */
  draw() {
    rect(this.x,this.y,this.w,this.h);
  }

  /**
   * Returns whether or not the xa nd y values is on the button
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */
  contains(x,y) {
    return this.x < x && x < this.x + this.w && this.y < y && y < this.y + this.h;
  }
}

//Current button
var button;
//The current display shape
var state = 0;


function setup() {
  createCanvas(500, 500);
  //Initialize new button
  button = new Button(width/2-width/4,height/2,75,75);
}

function draw() {
  //Draw background
  background(220);

  //Draw the button
  fill("#B9116D");
  button.draw();

  //draw the specific shape based on the state
  fill("#D75710")
  var x = width / 2 + width / 4;
  var y = width / 2;
  var h = 50;
  if(state == 0) {
    rect(x,y,h,h);
  } else if(state == 1) {
    ellipse(x,y,h);
  } else if(state == 2) {
    triangle(x,y,x + h,y,x + h,y + h);
  }
}


function mouseClicked() {
  if(button.contains(mouseX,mouseY)) {
    //Loop the state between 0, 1, and 2
    state = (state + 1)% 3;
  }
}