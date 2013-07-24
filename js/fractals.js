//STATIC GLOBAL VARIABLES

//NON-STATIC GLOBAL VARIABLES
var ctx;

$(function(){
  // Find our canvas
  var c = document.getElementById("fractal-canvas");
  // Set its drawing context to two-dimensional
  ctx=c.getContext("2d");
  ctx.fillStyle="444444";
});