// const canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const cntxt = canvas.getContext("2d");

// function Bubble(x, y, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dy = dy;
//     this.radius = radius;

//     this.draw = function() {
//         // cntxt.beginPath();
//         // cntxt.strokeStyle = "rgba(255, 0, 0, 0.4);";
//         // cntxt.lineWidth = 1;
//         // // cntxt.arc(this.x, this.y, this.radius - 5, 0, Math.PI * 1.5, true);
//         // cntxt.stroke();


//         cntxt.beginPath();
//         cntxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         cntxt.fillStyle  = "rgb(254, 44, 118, 0.6)";
//         cntxt.fill();
//     };

//     this.update = function() {
//         if (this.y + this.radius < 0) {
//             this.y = window.innerHeight;
//             this.x = Math.random() * window.innerWidth;
//         }

//         this.y -= this.dy;

//         this.draw();
//     };
// }

// let bubArray = [];

// for (i = 0; i < 40; i++) {
//     // let radius = Math.random() * (50 - 10) + 10;
//     let radius = 90;
//     let x = Math.random() * (window.innerWidth - radius * 2) + radius;
//     let y = Math.random() * window.innerHeight;
//     let dy = Math.random() * (2 - 0.5) + 0.5;


//     bubArray.push(new Bubble(x, y, dy, radius));
// }

// function animate() {
//     requestAnimationFrame(animate);
//     cntxt.clearRect(0, 0, innerWidth, innerHeight);

//     for (i = 0; i < bubArray.length; i++) {
//         bubArray[i+10].update();
//     }
// }

// console.log(bubArray);

// animate();




// select the html element 'canvas'
var canvas = document.querySelector('canvas');

// resize the canvas so it takes the size of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create a context 'c'
var c = canvas.getContext('2d');

// create an array of blue shades
var colorArray = ['rgb(149, 8, 68, 0.4)', 'rgb(227, 22, 88, 0.4)', 'rgb(254, 39, 106, 0.4)', 'rgb(226, 31, 97,0.4)','rgb(154, 1, 66,0.4)'];

// Circle Object with two functions : draw and update
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.lineWidth = 2;
    c.fill();
  }

  this.update = function () {

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

addEventListener('resize', function(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  
  init();
})

var circleArray;

function init(){
  // empty the circle array to prevent lag
  circleArray = [];

  for (var i = 0; i < 50; i++) {
    var radius = 90;  
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius));

  }
}


// animate the bubblezzz
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }

}

init();
animate();

function makeTimer() {

  //    var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");  
    var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");      
      endTime = (Date.parse(endTime) / 1000);

      var now = new Date();
      now = (Date.parse(now) / 1000);

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400); 
      var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
      if (hours < "10") { hours = "0" + hours; }
      if (minutes < "10") { minutes = "0" + minutes; }
      if (seconds < "10") { seconds = "0" + seconds; }

      $(".days").html(days);
      $(".hours").html(hours);
      $(".minutes").html(minutes);
      $(".seconds").html(seconds);   

  }

  setInterval(function() { makeTimer(); }, 1000);