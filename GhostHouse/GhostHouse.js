//For the DOM requirement, DOM is included in p5.js when a switch is clicked 
//on the sidebar so DOM is in place for this implamentation using that import 
//You can change the color of the background and the color of the ghost
//You can change the speed and pattern at which the ghost moves around
//You can change the size of the ghost and make it disappear and stop moving

let slider;
let button;
var bgrd = 'black';
let x = 0;
let y = 0;
let w = 0;
let h = 0;
let eh = 0;
let ew = 0;
let  bw = 0;
let  bmw = 0; 
let  blw = 0;
let  bh = 0;
let  bmh = 0;
let  blh = 0;
var waveLengthOne = 80.0;
var waveLengthTwo = 90.0;
var pointCount = 0;
var amplitude = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Slider Bar to make ghost show up from the black backgound
  slider = createSlider(0, 255, 10);
  slider.position(300, 120);
  slider.style('width', '80px');
  
  //Button to Change the background color
  button = createButton('Bust the Ghost');
  button.position(700, 120);
  button.mousePressed(
    function(){
      bgrd = color(135, random(255), random(255));
    }
  );

  //Slider Bar to change change the speed of the ghost
  slider2 = createSlider(0, 20, 10);
  slider2.position(1050, 120);
  slider2.style('width', '80px');
  
  //Button to Make Ghost shrink
  button = createButton('Make it Go Away');
  button.position(1360, 120);
   button.mousePressed(
     function(){
      w = -150
      h = -150
      eh = -60;
      ew = -40;
      bw = -50;
      bmw = -65; 
      blw = -85;
      bh = -80;
      bmh = -75;
      blh = -90;
    }
   );
  }

function GhostFlight() {  
  //Slider value to change the ghost flight pattern
  let am = 0;
  let val2 = slider2.value();
  am = (val2);
  
  //Flight Pattern of ghost
  beginShape();
    for(var i=0; i < pointCount; i++){
      angle = i / waveLengthOne * TWO_PI;
      var y = sin(angle)* am * 1 * amplitude;
      angle = i / waveLengthTwo * HALF_PI;
      var x = cos(angle)* 0.5 * amplitude;
      vertex(x,y); 
    }
  endShape();
  
  //Brings back the Background so there's no copies 
  background(bgrd);
  pointCount++;
  strokeWeight(3);
  
  //Slider Value for Ghost Color
  let val = slider.value();
  fill(val);
  noStroke();
  
  //Ghost Body
  arc(x + 750, y + 550,  w + 150,  h + 150, PI, TWO_PI);
  rect(x + 675, y + 550, w + 150, h + 150);
  //Ghost Butt
  arc(x + 700, y + 700, bw + 50, bh + 80, TWO_PI, PI);
  arc(x + 792, y + 700, bmw + 65,  bmh + 75, TWO_PI, PI);
  arc(x + 742, y + 700, blw + 85, blh + 90, TWO_PI, PI);
  //Eyes
  fill('black');
  ellipse(x + 725, y + 565, ew + 40, eh + 60);
  ellipse(x + 775, y + 565, ew + 40, eh + 60);
}

function Instructions(){
  //Instructions for Sliders and Buttons
  textSize(32);
  fill('yellow');
  text('Make it Appear', 240, 100);
  textSize(32);
  text('Turn on the Lights On', 600, 100);
  textSize(32);
  text('BOO!', 1370, 100);
  textSize(32);
  text('Calm it Down', 1000, 100);
}

function draw() {
  background(bgrd);
  GhostFlight();
  Instructions();
}
