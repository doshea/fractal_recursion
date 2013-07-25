//STATIC GLOBAL VARIABLES
var FRACTAL_SCALE=0.50;
var BASE_CASE_DIM = 1;

//NON-STATIC GLOBAL VARIABLES
var ctx;

$(function(){
  // Find our canvas
  var c = document.getElementById("fractal-canvas");
  // Set its drawing context to two-dimensional
  ctx=c.getContext("2d");
  ctx.fillStyle="444444";
});

function draw_line(x1, y1, x2, y2){
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function draw_square(left_x, top_y, dim){
  var right_x = left_x + dim;
  var bottom_y = top_y + dim;

  // Draw top line
  draw_line(left_x, top_y, right_x, top_y);
  // Draw right line
  draw_line(right_x, top_y, right_x, bottom_y);
  // Draw bottom line
  draw_line(left_x, bottom_y, right_x, bottom_y);
  // Draw left line
  draw_line(left_x, top_y, left_x, bottom_y);
}

function recursive_square(left_x, top_y, dim){
  // draw a square according to those dimensions
  draw_square(left_x, top_y, dim);

  // if our dimension was more than 1
  if (dim >= BASE_CASE_DIM) {
    // halve the dimensions and
    var new_dim = dim*FRACTAL_SCALE;


    // call recursive square function again, with new dimension and same coordinates
    recursive_square(left_x, top_y, new_dim);

    // call recursive square function again, with new dimension and coordinates of
    // right side (old left coordinate plus old dimension) minus new dimension and
    // bottom side (old top coordinate plus old dimension) minus new dimension
    recursive_square(left_x + dim - new_dim, top_y + dim - new_dim, new_dim);
  }
}
