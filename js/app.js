var dataset = [];

for (var i = 0; i < 10; i++){
  var num = Math.round(Math.random() * 25);
  dataset.push(num);
}
//-------------------------------------------
// d3.select("body").selectAll("p")
//     .data(dataset)
//     .enter()
//     .append("p")
//     .text(function(d) {return d;})
//     .style("color", function(d){
//       if(d > 15) {
//         return "red"
//       } else {
//         return "black"
//       }
//     });
//--------------------------------------------
// d3.select("body").selectAll("div")
//   .data(dataset)
//   .enter()
//   .append("div")
//   .attr("class", "bar")
//   .style("height", function(d){
//     var barHeight = d * 5;
//     return barHeight + "px";
//   })
//   .style("margin-right", "2px");
//--------------------------------------------
// var w = 1000;
// var h = 500;

// var svg = d3.select("body")
//   .append("svg")
//   .attr("width", w)
//   .attr("height", h);

// var circles = svg.selectAll("circle")
//   .data(dataset)
//   .enter()
//   .append("circle");

// circles.attr("cx", function(d, i){
//     return (i * 50) + 25;
//   })
//   .attr("cy", h/2)
//   .attr("r", function(d){
//     return d
//   })
//   .attr("fill", function(d){
//     if(d > 10 && d < 30){
//       return "green"
//     } else {
//       return "black"
//     }
//   });
//---------------------------------------------
var w = 500;
var h = 100;
var barPadding = 1;

var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function(d, i){
    return i * (w / dataset.length) + 5;
  })
  .attr("y", function(d){
    return h - (d * 4);
  })
  .attr("width", w / dataset.length - barPadding)
  .attr("height", function(d){
    return d * 4;
  })
  .attr("fill", function(d){
    return "rgb(0, 0, " + (d * 10) + ")";
  });

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d){
    return d;
  })
  .attr("x", function(d, i){
    return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2
  })
  .attr("y", function(d){
    return h - (d * 4) + 14;
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white")
  .attr("text-anchor", "middle");