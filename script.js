teams = [
{"nation": "Belguim",
"rank": 1,
"worldcupwins": 0,
"worldcupappearances": 12,
"continentalwins": 0,
"continentalappearances": 5,
"confederation": "UEFA"
},

{"nation": "Argentina",
"rank": 2,
"worldcupwins": 2,
"worldcupappearances": 16,
"continentalwins": 14,
"continentalappearances": 40,
"confederation": "CONMEBOL"
},

{"nation": "Spain",
"rank": 3,
"worldcupwins": 1,
"worldcupappearances": 14,
"continentalwins": 3,
"continentalappearances": 9,
"confederation": "UEFA"
},

{"nation": "Germany",
"rank": 4,
"worldcupwins": 4,
"worldcupappearances": 18,
"continentalwins": 3,
"continentalappearances": 11,
"confederation": "UEFA"
},

{"nation": "Chile",
"rank": 5,
"worldcupwins": 0,
"worldcupappearances": 9,
"continentalwins": 1,
"continentalappearances": 37,
"confederation": "CONMEBOL"
},

{"nation": "Brazil",
"rank": 6,
"worldcupwins": 5,
"worldcupappearances": 20,
"continentalwins": 8,
"continentalappearances": 33,
"confederation": "CONMEBOL"
},

{"nation": "Portugal",
"rank": 7,
"worldcupwins": 0,
"worldcupappearances": 6,
"continentalwins": 0,
"continentalappearances": 6,
"confederation": "UEFA"
},

{"nation": "Colombia",
"rank": 8,
"worldcupwins": 0,
"worldcupappearances": 5,
"continentalwins": 1,
"continentalappearances": 19,
"confederation": "CONMEBOL"
},

{"nation": "England",
"rank": 9,
"worldcupwins": 1,
"worldcupappearances": 14,
"continentalwins": 0,
"continentalappearances": 8,
"confederation": "UEFA"
},

{"nation": "Austria",
"rank": 10,
"worldcupwins": 0,
"worldcupappearances": 7,
"continentalwins": 0,
"continentalappearances": 2,
"confederation": "UEFA"
},

{"nation": "Uruguay",
"rank": 11,
"worldcupwins": 2,
"worldcupappearances": 12,
"continentalwins": 15,
"continentalappearances": 42,
"confederation": "CONMEBOL"
},

{"nation": "Switzerland",
"rank": 12,
"worldcupwins": 0,
"worldcupappearances": 10,
"continentalwins": 0,
"continentalappearances": 4,
"confederation": "UEFA"
},

{"nation": "Ecuador",
"rank": 13,
"worldcupwins": 0,
"worldcupappearances": 3,
"continentalwins": 0,
"continentalappearances": 24,
"confederation": "CONMEBOL"
},

{"nation": "Italy",
"rank": 14,
"worldcupwins": 4,
"worldcupappearances": 18,
"continentalwins": 1,
"continentalappearances": 9,
"confederation": "UEFA"
},

{"nation": "Netherlands",
"rank": 15,
"worldcupwins": 0,
"worldcupappearances": 10,
"continentalwins": 1,
"continentalappearances": 9,
"confederation": "UEFA"
},

{"nation": "Romania",
"rank": 16,
"worldcupwins": 0,
"worldcupappearances": 7,
"continentalwins": 0,
"continentalappearances": 4,
"confederation": "UEFA"
},

{"nation": "Wales",
"rank": 17,
"worldcupwins": 0,
"worldcupappearances": 1,
"continentalwins": 0,
"continentalappearances": 1,
"confederation": "UEFA"
},

{"nation": "Croatia",
"rank": 18,
"worldcupwins": 0,
"worldcupappearances": 4,
"continentalwins": 0,
"continentalappearances": 4,
"confederation": "UEFA"
},

{"nation": "Hungary",
"rank": 19,
"worldcupwins": 0,
"worldcupappearances": 9,
"continentalwins": 0,
"continentalappearances": 3,
"confederation": "UEFA"
},

{"nation": "Turkey",
"rank": 20,
"worldcupwins": 0,
"worldcupappearances": 2,
"continentalwins": 0,
"continentalappearances": 3,
"confederation": "UEFA"
}];

//Set constants
var w = 420,
    h = 400,
    padding = 30;
//Create adaptable scales
var xScale = d3.scale.linear()
  .domain([0, d3.max(teams, function (d) {
  return d3.max([d.rank, d.worldcupwins, d.worldcupappearances, d.continentalwins, d.continentalappearances]);
  })])
  .range([padding, w - padding]);

var yScale = d3.scale.linear()
  .domain([0, d3.max(teams, function (d) {
  return d3.max([d.rank, d.worldcupwins, d.worldcupappearances, d.continentalwins, d.continentalappearances]);
  })])
  .range([h - padding, padding]);

// select SVG element
svg = d3.select("svg");
// setup tooltip
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
    return d.nation
    return d.confederation;
});
svg.call(tip);
// setup data points
diag_circles = svg.selectAll("circle");

diag_circles.data(teams)
.enter()
.append("circle")
.attr("cx", function(d){return xScale(d.rank)})
.attr("cy", function(d){return yScale(d.worldcupwins)})
.attr("r", 10)
.style("stroke", "#003F85")
.on('mouseover', tip.show)
.on('mouseout', tip.hide);

//Set up the axes
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

function reDraw() {
    console.log('hi');
    xVar = document.getElementById('xAxisVar').value;
    yVar = document.getElementById('yAxisVar').value;

    d3.selectAll("circle")
        .transition()
        .duration(1000)
        .attr("cx", function (d) {
        return eval("xScale(d." + xVar + ");");
    })
        .attr("cy", function (d) {
        return eval("yScale(d." + yVar + ");");
    });
}