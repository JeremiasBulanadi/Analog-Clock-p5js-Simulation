let x = 1000;
let y = 1000;

function setup() {
    angleMode(DEGREES);
    createCanvas(x,y);
    background(0);
}

function draw() {
    // Putting 0,0 at center of the canvas and rotating everything by 90 degress counter-clockwise
    translate(width/2,height/2);
    rotate(-90);

    // Time updates
    let time = new Date();
    let second, minute, hour;
    second = time.getSeconds();
    minute = time.getMinutes();
    hour = time.getHours();
    
    // Angle calculations
    let secondAngle = map(second, 0, 60, 0, 360);
    let minuteAngle = map(minute, 0, 60, 0, 360);
    let hourAngle = map(hour%12, 0, 12, 0, 360);

    // Drawing the clock
    background(0);

    // Clock
    push();
    stroke(255);
    strokeWeight(2);
    noFill();
    circle(0,0, 950);
    pop();
    
    // Numbers
    rotate(90);
    textSize(100);
    stroke(255);
    strokeWeight(5);
    text("12", -60, -350);
    rotate(30);
    text("1", -25, -350);
    rotate(30);
    text("2", -25, -350);
    rotate(30);
    text("3", -25, -350);
    rotate(30);
    text("4", -25, -350);
    rotate(30);
    text("5", -25, -350);
    rotate(30);
    text("6", -25, -350);
    rotate(30);
    text("7", -25, -350);
    rotate(30);
    text("8", -25, -350);
    rotate(30);
    text("9", -25, -350);
    rotate(30);
    text("10", -60, -350);
    rotate(30);
    text("11", -60, -350);
    rotate(-60);
    
    // Drawing the hands
    // Hour Hand
    push();
    rotate(hourAngle);
    stroke(100);
    strokeWeight(10);
    console.log(second);
    line(0,0, 275, 0);
    pop();

    // Minute Hand
    push();
    rotate(minuteAngle);
    stroke(255);
    strokeWeight(10);
    console.log(second);
    line(0,0, 290, 0);
    pop();

    // Seconds Hand
    push();
    rotate(secondAngle);
    stroke(255,0,0);
    strokeWeight(10);
    console.log(second);
    line(0,0, 300, 0);
    pop();

}