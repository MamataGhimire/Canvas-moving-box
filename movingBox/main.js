var canvas=document.getElementById("canvas")
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

height=window.innerHeight;
width=window.innerWidth;

var ctx=canvas.getContext("2d");
ctx.fillStyle="#000000";
ctx.fillRect(0,0,height,width);

let y=0
let x=0
ctx.fillStyle="#FF5A33";
ctx.fillRect(x,y,50,50);

function move()
{
  ctx.clearRect(0,0,canvas.height,canvas.width)
  ctx.fillRect(x,y,50,50);
  y=y+5
   requestAnimationFrame(move);
  if(y>height)
  {
    y=0;
  }
}
move()



