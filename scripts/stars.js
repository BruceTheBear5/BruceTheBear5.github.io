//physics to make cool star stream effect in canvas. The idea is not mine, I have just translated it to JS and added extra functionality.
const canvas = document.getElementById('c1');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth; //screen width
canvas.height = window.innerHeight; //screen height
var count = 0; // Count to deter color switching
var phase = 0; // Phase for the sine function
var bodyBgColor, bodyRGB;

function getRainbowColor() {
    var center = 128; // Center of the color spectrum
    var width = 127; // Width of the color spectrum
    var frequency = Math.PI * 2 / 300; // Frequency of the sine function

    var red   = Math.sin(frequency * phase + 0) * width + center;
    var green = Math.sin(frequency * phase + 2) * width + center;
    var blue  = Math.sin(frequency * phase + 4) * width + center;

    phase += 0.1;

    red   = Math.round(Math.min(Math.max(0, red), 255));
    green = Math.round(Math.min(Math.max(0, green), 255));
    blue  = Math.round(Math.min(Math.max(0, blue), 255));

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function extractRGB(colorString) {
  var rgbValues = colorString.match(/\d+/g);
  return {
      red: parseInt(rgbValues[0]),
      green: parseInt(rgbValues[1]),
      blue: parseInt(rgbValues[2])
  };
}

class Star {
  constructor() {
    this.x = Math.random()*canvas.width-canvas.width/2;  //random x
    this.y = Math.random()*canvas.height-canvas.height/2; //random y
    this.px, this.py;
    this.z = Math.random()*4; //random z    
  }
  
  update() {
    bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
    bodyRGB = extractRGB(bodyBgColor);
    c.fillStyle = 'rgba(' + bodyRGB.red + ', ' + bodyRGB.green + ', ' + bodyRGB.blue + ', 0.1)';

    this.px = this.x;
    this.py = this.y;
    this.z += speed;
    this.x += this.x*(speed*0.2)*this.z;
    this.y += this.y*(speed*0.2)*this.z;
    if (this.x > canvas.width/2+50 || this.x < -canvas.width/2-50 ||
        this.y > canvas.height/2+50 || this.y < -canvas.height/2-50) {
      this.x = Math.random()*canvas.width-canvas.width/2;
      this.y = Math.random()*canvas.height-canvas.height/2;
      this.px = this.x;
      this.py = this.y;
      this.z = 0;
    }

    if(count++ == 0)
      c.strokeStyle = getRainbowColor();
    //SET COLOR CHANGE FREQUENCY HERE
    count %= 1000;
  }
  
  //draws line from x,y to px,py
  show() {    
    c.lineWidth = this.z;
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.px, this.py);
    c.stroke();
  }
}

//SET BASE SPEED HERE
let speed = 0.1;
let stars = [];

//SET STAR COUNT HERE
for (let i = 0; i < 1000; i++) stars.push(new Star());

bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
bodyRGB = extractRGB(bodyBgColor);
c.fillStyle = 'rgba(' + bodyRGB.red + ', ' + bodyRGB.green + ', ' + bodyRGB.blue + ', 0.1)';

c.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';

c.translate(canvas.width/2, canvas.height/2);

function draw() {
  //create rectangle
  c.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
  for (let s of stars) {
    s.update();
    s.show();
  }
  //infinte call to draw
  requestAnimationFrame(draw);
}

draw();