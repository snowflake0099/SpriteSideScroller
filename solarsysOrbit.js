const sun = new Image();
const moon = new Image();
const earth = new Image();
const ctx = document.getElementById("canvas").getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function backgroundImage(){
  const spaceImg = new Image();
  spaceImg.src = "space.png";
  spaceImg.onload = function(){
    ctx.drawImage(spaceImg,canvas.width, canvas.height);
  }
}

function draw() {

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(-5, 0, 600,600); // clear canvas

  ctx.fillStyle = "rgb(0 0 0 / 55%)";
  ctx.strokeStyle = "rgb(0 153 255 / -0.5%)";
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  const time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  
  ctx.drawImage(earth, -12, -12, 50,50);

  // Moon
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, 6.5);
 // ctx.drawImage(moon, 3, 3);
 ctx.drawImage(moon, 9.5, 9.5, 25,25);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 100,100, 100, 100);

  window.requestAnimationFrame(draw);
}
backgroundImage();


init();
