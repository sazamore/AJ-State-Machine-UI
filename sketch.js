var moods = []; //holder of new shapes
var shapes = []; //holder of test shapes DELETE EVENTUALLY

//let sidebar
function setup() {
    createCanvas(800, 800);
    textFont("FontAwesome");
    shapes[0] = new Draggable(100, 100, 100, 50);
    shapes[1] = new Draggable(150, 100, 50, 50);
    shapeZ = new Draggable(200, 100, 50, 50);
    shapeW = new Draggable(100, 300, 100, 50, c=40);
    
}

function draw() {
    background(253, 185, 30);

    //STEP 1: try indexing single element array
    //shapes[0].over();
    //shapes[0].update();
    //shapes[0].show();
  
    //STEP 2: try indexing multiple elements in array
    for (let i = 0; i < shapes.length; i = i + 1) {
        shapes[i].show();
    }
  
    // moods and shapes are now identical. Try working with JUST moods. You can do it. I believe!
      //loop through all the values and draw them
    for (let i = 0; i < moods.length; i = i + 1) {
        moods[i].show();
      }

    shapeZ.show(); //now contains over() and update() methods

    shapeW.show();
}
  
//check to see if mouse on shape AND mouse button pressed
function mousePressed() {

    //shapes[0].pressed();
    for (let i = 0; i < shapes.length; i = i + 1) {
      shapes[i].pressed();
    }

    for (let i = 0; i < moods.length; i = i + 1) {
        moods[i].pressed();
      }
    shapeZ.pressed();
    shapeW.pressed();
}
//check to see if mouse button released
function mouseReleased() {
    //shapes[0].released();
    for (let i = 0; i < shapes.length; i = i + 1) {
        shapes[i].released();
    }
  
    for (let i = 0; i < moods.length; i = i + 1) {
        moods[i].released();
      }
    //shapeY.released();
    shapeZ.released();
    shapeW.released();

}

function makeShape() {
  //Makes a new object and saves it to newMood. Appends newMood to the moods array. Prints length of moods array for SANITY.
  
    var newMood = new Draggable(random(200,400),
                                random(200,400), 100, 50);

    append(moods,newMood) //previously appended to moods
    console.log(moods.length);
  }
