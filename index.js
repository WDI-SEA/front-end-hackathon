var express = require('express');
var d3 = require("d3");
var chart = d3.select(".chart");
var bar = chart.selectAll("div");


d3.csv("/cultural_neighborhood2.csv", function(error, data) {
  dataset = data.map(function(d) { return [ +d["x-coordinate"], +d["y-coordinate"] ]; });
  x.domain([0, d3.max(data, function(d) { return d.value; })]);
  chart.attr("height", barHeight * data.length);

  bar.data(data)
    .enter().append("div")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

  bar.append("rect")
      .attr("width", function(d) { return x(d.value); })
      .attr("height", barHeight - 1);

  bar.append("text")
      .attr("x", function(d) { return x(d.value) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.value; });
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}

app.listen(3000);