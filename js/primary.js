$(document).ready (function () {
  console.log('ready');

  var data = [];
  var values = [];
  var precincts = [];

  $.getJSON('js/data.json', function(primary) {

    for (var i = 2; i < 100; i++) {
        data.push([primary[i].Candidate, primary[i].PrecinctName, primary[i].Votes]);
        values.push(primary[i].Votes);
        precincts.push(primary[i].PrecinctName)
    }
    console.log(data[0]);
    values = values.sort();
    console.log(values);
    console.log(precincts);


    // var scale = d3.scale.linear().domain([values[0], values.length-2]).range([0, 600]);

    var bars = d3.select('div').selectAll('div').data(data).enter().append('div').attr('class', 'bar').style('height', function(d){return d[2]/2 +'px';}).style('background-color', function(d){
        if(d[0] === 'Hillary Clinton') {
          return 'red';
        } else {
          return 'blue';}
      });

    // bars.selectAll('text').data(precincts).enter().append('text').attr('class', 'text').text(function(d){return d;});
  });

});
