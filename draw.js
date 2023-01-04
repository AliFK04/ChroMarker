const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
  const canvas = document.getElementById('my-canvas');
  const ctx = canvas.getContext('2d');

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
  });

  canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;

    const x = event.offsetX;
    const y = event.offsetY;

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
});