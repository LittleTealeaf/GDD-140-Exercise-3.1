/// <reference path="./libraries/p5.global-mode.d.ts" />

class Button {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    rect(this.x,this.y,this.w,this.h);
  }

  contains(x,y) {
    return this.x < x && x < this.x + this.w && this.y < y && y < this.y + this.h;
  }
}

var button;
var state = 0;

function setup() {
  createCanvas(500, 500);
  button = new Button(width/2-width/4,height/2,75,75);
}

function draw() {
  background(220);
  fill("#B9116D");
  button.draw();

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
    state = (state + 1)% 3;
  }
}