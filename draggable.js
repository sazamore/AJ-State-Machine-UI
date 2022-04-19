// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>


class Draggable {
  constructor(x=400, y=400, w=100, h=100, c=0) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    //circle(x,y,w);
    this.offsetX = 0;
    this.offsetY = 0;
    this.offsetZ = 0;
  }
  
  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    //let triangle;
    this.over();
    this.update();
    stroke(0);
    strokeWeight(4);
    // Different fill based on state
    if (this.dragging) {
      fill("green");
    } else if (this.rollover) {
      fill("purple");
    } else {
      fill("#8BC34A");
    }
    rect(this.x, this.y, this.w, this.h, this.c);
    //triangle(30, 75, 58, 20, 86, 75);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }

}

