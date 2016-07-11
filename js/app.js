// call asking for geoJSON data for the last 30 days
function quakes30Days() {
  $.ajax({
      url : 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime&endtime',
      type : 'GET',
      dataType:'json'
      })
      .fail(function(error) {
        console.log('Error ' + error);
      })
      .done(function(geoJsonData) {
        $('#loadingImage').hide()
        drawMap(geoJsonData)
  });
};

function drawMap(geoJSON) {
// Holding on the GeonJSON
// Passed in From the AJAX call
var myJson = geoJSON;
 // Width and height
var w = 700;
var h = 600;

// Define map projection
// Sets viewport so that all data points are visible
var projection = d3.geo.mercator()
                       .translate([w/2, h/2])
                       .scale([100]);

// Define path generator
var path = d3.geo.path()
                 .projection(projection);

// Init SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

// Attaches data to paths
svg.selectAll("path")
   .data(myJson.features)
   .enter()
   .append("path")
   .attr("d", path)
   .attr('fill-opacity', 0.2)
   // .attr("r", function(d) {
   //  return Math.sqrt(h - d[1]);
   //  })
   .style("fill", "gray");

// tried to add a world map underlay
// var g = svg.append("g");

// d3.json("world-110m2.json", function(error, topology) {
//     g.selectAll("path")
//       .data(topojson.object(topology, topology.objects.countries)
//           .geometries)
//     .enter()
//       .append("path")
//       .attr("d", path)
// });
};

$(function() {
  quakes30Days()
});

