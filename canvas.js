const canvas = document.getElementById("pixate");
const clearBtn = document.getElementById("clear");
const paintBtn = document.getElementById("paint");

const strokeSelect = document.getElementById("stroke-select");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

const ctx = canvas.getContext("2d");
ctx.lineCap = "round"

let isPainting = false;
let brushWidth = 2;
let startX;
let startY;

strokeSelect.addEventListener("change", (e) => {
  console.log("stroke select", e.target.value);
  brushWidth = e.target.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, 600, 600);
});

canvas.addEventListener("mousedown", (e) => {
  isPainting = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mousedown", (e) => {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
});

canvas.addEventListener("mousemove", (e) => {
  draw(e);
});

function draw(e) {
  if (!isPainting) return;

  ctx.lineWidth = brushWidth;
  ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
  ctx.stroke();
}

canvas.addEventListener("mouseup", () => {
  isPainting = false;
  ctx.stroke();
  ctx.beginPath();
});
