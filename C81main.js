var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;
var current_position_of_mouse_x,current_position_of_mouse_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;



canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
    console.log(color);

    //mouse_x = e.clientX - canvas.offsetLeft;
    //mouse_y = e.clientY - canvas.offsetTop;
    //console.log("X ="+mouse_x+" ,Y = "+mouse_y);
    //circle(mouse_x,mouse_y);
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y coordinates = ");
        console.log("X = "+ last_position_of_x + "Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current position of x and y coordinates = ");
        console.log("X = "+ current_position_of_mouse_x + "Y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke(); 
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
 canvas.addEventListener("mouseup", my_mouseup);

 function my_mouseup(e){
     mouseEvent = "mouseUP";
 }
 canvas.addEventListener("mouseleave", my_mouseleave);

 function my_mouseleave(e){
     mouseEvent = "mouseleave";
 }
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}