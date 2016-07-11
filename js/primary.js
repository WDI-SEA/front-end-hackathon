$(document).ready (function () {
  console.log('ready');

  var data = [];

  $.getJSON('js/data.json', function(primary) {

    for (var i = 2; i < 100; i++) {
        data.push([primary[i].Candidate, primary[i].PrecinctCode, primary[i].Votes]);
    }
    console.log(data[0]);

    d3.select('body').selectAll('div').data(data).enter().append('div').attr('class', 'bar').style('height', function(d){return d[2] +'px';}).style('background-color', function(d){
        if(d[0] === 'Hillary Clinton') {
          return 'red';
        } else {
          return 'blue';}
      });

  });

});
