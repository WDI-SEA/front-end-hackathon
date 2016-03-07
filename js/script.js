// Example data

var data = [4, 8, 15, 16, 23, 42];

// D3 chart creation

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chartd3")
    .selectAll("div")
        .data(data)
    .enter().append("div")
        .style("width", function(d) { return d * 10 + "px"; })
        .text(function(d) { return d; });

// D3 chart creation with SVG

var width = 420,
    barHeight = 20;

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(".chartd3svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });

// chart of letter popularity



// Analog Clock with D3

var fields;

fields = function() {
  var currentTime, hour, minute, second;
  currentTime = new Date();
  second = currentTime.getSeconds();
  minute = currentTime.getMinutes() + second / 60;
  hour = currentTime.getHours() + minute / 60;
  return data = [
    {
      "unit": "seconds",
      "numeric": second
    }, {
      "unit": "minutes",
      "numeric": minute
    }, {
      "unit": "hours",
      "numeric": hour
    }
  ];
};

var offSetX, offSetY, pi, scaleSecs, scaleHours;

offSetX = 100;
offSetY = 100;

pi = Math.PI;
scaleSecs = d3.scale.linear().domain([0, 59 + 999/1000]).range([0, 2 * pi]);
scaleMins = d3.scale.linear().domain([0, 59 + 59/60]).range([0, 2 * pi]);
scaleHours = d3.scale.linear().domain([0, 11 + 59/60]).range([0, 2 * pi]);

var vis, clockGroup;

vis = d3.selectAll(".chartclock");

clockGroup = vis.append("svg:g")
  .attr("transform", "translate(" + offSetX + "," + offSetY + ")");

clockGroup.append("svg:circle")
  .attr("r", 80).attr("fill", "none")
  .attr("class", "clock outercircle")
  .attr("stroke", "black")
  .attr("stroke-width", 2);

clockGroup.append("svg:circle")
  .attr("r", 4)
  .attr("fill", "black")
  .attr("class", "clock innercircle");

var render;

render = function(data) {

  var hourArc, minuteArc, secondArc;

  clockGroup.selectAll(".clockhand").remove();

  secondArc = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(70)
    .startAngle(function(d) {
    return scaleSecs(d.numeric);
  })
    .endAngle(function(d) {
    return scaleSecs(d.numeric);
  });

  minuteArc = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(70)
    .startAngle(function(d) {
    return scaleMins(d.numeric);
  })
    .endAngle(function(d) {
    return scaleMins(d.numeric);
  });

  hourArc = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(50)
    .startAngle(function(d) {
    return scaleHours(d.numeric % 12);
  })
    .endAngle(function(d) {
    return scaleHours(d.numeric % 12);
  });

  clockGroup.selectAll(".clockhand")
    .data(data)
    .enter()
    .append("svg:path")
    .attr("d", function(d) {
      if (d.unit === "seconds") {
        return secondArc(d);
      } else if (d.unit === "minutes") {
        return minuteArc(d);
      } else if (d.unit === "hours") {
        return hourArc(d);
      }
    })
    .attr("class", "clockhand")
    .attr("stroke", "black")
    .attr("stroke-width", function(d) {
      if (d.unit === "seconds") {
        return 2;
      } else if (d.unit === "minutes") {
        return 3;
      } else if (d.unit === "hours") {
        return 3;
      }
    })
    .attr("fill", "none");
};

setInterval(function() {
  var data;
  data = fields();
  return render(data);
}, 1000);