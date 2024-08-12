canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokestyle = color;
ctx.strokestyle.linewidth = 2;
ctx.arc(200, 200, 40, 0, 2* Math.PI);
ctx.stroke();
function myMousedown(e)
{
    color = document.getElemmentById("color").value;
    console.log;(color);

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    console.log("X = " + mouseX+",Y= " + mouseY)
    circle(mouseX , mouseY)
}
function circle(mouseX , mouseY)
{
    ctx.beginPath();
    ctx.strokestyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX, mouseY, 40 ,0 ,2*Math.PI);
}

function clearArea()
{
    ctx.clearRect(0, 0,canvas.width, canvas.height);
}