'use strict';

var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var pxRatio = window.devicePixelRatio || 1;

var width = canvas.width = window.innerWidth * pxRatio;
var height = canvas.height = window.innerHeight * pxRatio;

var centerX = width / 2;
var centerY = height / 2;

var quantity = 200;

var size = 20;
var speed = 0;

function render() {

  context.clearRect(0, 0, width, height);

  speed += 0.1;


  for (var i = 0; i < quantity; i++) {

    var progress = speed * (quantity - i) * 0.2;

    var radius = size * i;

    var x = (centerX - 700) + Math.cos(progress) * size / 2;
    var y = (centerY - 350) + Math.sin(progress) * size / 2;

    context.beginPath();

    context.arc(x, y, radius, 0, Math.PI * 2);
    context.strokeStyle="#873689";
    context.lineWidth=10;
    context.stroke();

    context.closePath();
  }

    for (var i = 0; i < quantity; i++) {

    var progress = speed * (quantity - i) * 0.2;

    var radius = size * i;

    var x = (centerX + 700) + Math.cos(progress) * size / 2;
    var y = (centerY - 350) + Math.sin(progress) * size / 2;

    context.beginPath();

    context.arc(x, y, radius, 0, Math.PI * 2);
    context.strokeStyle="#873689";
    context.lineWidth=10;
    context.stroke();

    context.closePath();
  }

  requestAnimationFrame(render);
};

render();