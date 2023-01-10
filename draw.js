const canvas = document.createElement('canvas');

canvas.id = "myCanvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.top = '0px';
canvas.style.position = "absolute";
canvas.style.zIndex = 999;

const body = document.body;
body.appendChild(canvas);

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (event) => {
  console.log("mousedown");
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
});

canvas.addEventListener('mousemove', (event) => {
  if (!isDrawing) return;
  
  const x = event.offsetX;
  const y = event.offsetY;

  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastX = x;
  lastY = y;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});
