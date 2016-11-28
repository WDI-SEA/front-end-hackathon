

  var states = [
          ['Arizona', 'AZ'],
          ['Alabama', 'AL'],
          ['Alaska', 'AK'],
          ['Arizona', 'AZ'],
          ['Arkansas', 'AR'],
          ['California', 'CA'],
          ['Colorado', 'CO'],
          ['Connecticut', 'CT'],
          ['Delaware', 'DE'],
          ['Florida', 'FL'],
          ['Georgia', 'GA'],
          ['Hawaii', 'HI'],
          ['Idaho', 'ID'],
          ['Illinois', 'IL'],
          ['Indiana', 'IN'],
          ['Iowa', 'IA'],
          ['Kansas', 'KS'],
          ['Kentucky', 'KY'],
          ['Kentucky', 'KY'],
          ['Louisiana', 'LS'],
          ['Maine', 'ME'],
          ['Maryland', 'MD'],
          ['Massachusetts', 'MA'],
          ['Michigan', 'MI'],
          ['Minnesota', 'MN'],
          ['Mississippi', 'MS'],
          ['Missouri', 'MO'],
          ['Montana', 'MT'],
          ['Nebraska', 'NE'],
          ['Nevada', 'NV'],
          ['New Hampshire', 'NH'],
          ['New Jersey', 'NJ'],
          ['New Mexico', 'NM'],
          ['New York', 'NY'],
          ['North Carolina', 'NC'],
          ['North Dakota', 'ND'],
          ['Ohio', 'OH'],
          ['Oklahoma', 'OK'],
          ['Oregon', 'OR'],
          ['Pennsylvania', 'PA'],
          ['Rhode Island', 'RI'],
          ['South Carolina', 'SC'],
          ['South Dakota', 'SD'],
          ['Tennessee', 'TN'],
          ['Texas', 'TX'],
          ['Utah', 'UT'],
          ['Vermont', 'VT'],
          ['Virginia', 'VA'],
          ['Washington', 'WA'],
          ['West Virginia', 'WV'],
          ['Wisconsin', 'WI'],
          ['Wyoming', 'WY'],
      ];

  function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
      return "<h4>"+n+"</h4><table>"+
        "<tr><td>Total:</td><td>"+(d.Year2013)+"</td></tr>"+
        "<tr><td>Per 10,000:</td><td>"+(d.ratePer)+"</td></tr>"+
        "<tr><td>%change:</td><td>"+(d.change)+"</td></tr>"+
        "</table>";
  }
    
  d3.select(self.frameElement).style("height", "600px");

  var homelessData;
$('.radio').on('change', function(e){
  if($(this).attr('value') === 'all'){
    console.log(this);
    console.log('all');

      //converting my csv file to json and giving it to my draw function.
      $('#statesvg').html('');
      d3.csv("./homeless.csv", function(d) {
        return {
          Id: d.Id,
          state: d.state,
          variable: d.variable,
          year13: d.year13,
          year12: d.year12,
          change: d.change,
          percent: d.percent,
          ratePer10000: d.ratePer10000
        };
      }, function(error, rows) {
        var homeless = {};
        var alteredInput;
        var rate;
        for(var i = 0; i < rows.length;i++){
          console.log(rows[i].percent);
          rate = Math.floor(rows[i].ratePer10000);
          alteredInput = rows[i].state.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
          for(var j = 0; j < states.length; j++){
            if(states[j][0] == alteredInput){
              homeless[states[j][1]] = {
                Year2013: rows[i].year13,
                ratePer: rate,
                change: rows[i].change,
                color: "rgb(0, 0, " + (rate * 6) + ")"
              }
            }
          } 
        }
        uStates.draw("#statesvg", homeless, tooltipHtml);
      });


  } 
  if($(this).attr('value') === 'vets'){
    console.log(this)
    console.log('vets');

    $('#statesvg').html('');
    d3.csv("./veterans.csv", function(d) {
      return {
        Id: d.Id,
        state: d.state,
        variable: d.variable,
        year13: d.year13,
        year12: d.year12,
        change: d.change,
        percent: d.percent,
        ratePer10000: d.ratePer10000
      };
    }, function(error, rows) {
      var homeless = {};
      var alteredInput;
      var rate;
      for(var i = 0; i < rows.length;i++){
        console.log(rows[i].percent);
        rate = Math.floor(rows[i].ratePer10000);
        alteredInput = rows[i].state.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(var j = 0; j < states.length; j++){
          if(states[j][0] == alteredInput){
            homeless[states[j][1]] = {
              Year2013: rows[i].year13,
              ratePer: rate,
              change: rows[i].change,
              color: "rgb(0, " + (rate * 100) + ", 0)"
            }
          }
        } 
      }
      uStates.draw("#statesvg", homeless, tooltipHtml);
    });


  }

});


  









// LEARNING ABOUT TO USE D3.JS-------------------------------------------------
//-----------------------------------------------------------------------------
// var dataset = [];

// for (var i = 0; i < 10; i++){
//   var num = Math.round(Math.random() * 25);
//   dataset.push(num);
// }
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
// var dataset = [];

// for (var i = 0; i < 10; i++){
//   var num = Math.round(Math.random() * 25);
//   dataset.push(num);
// }

// var w = 500;
// var h = 100;
// var barPadding = 1;

// var svg = d3.select("body")
//   .append("svg")
//   .attr("width", w)
//   .attr("height", h);

// svg.selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("x", function(d, i){
//     return i * (w / dataset.length) + 5;
//   })
//   .attr("y", function(d){
//     return h - (d * 4);
//   })
//   .attr("width", w / dataset.length - barPadding)
//   .attr("height", function(d){
//     return d * 4;
//   })
//   .attr("fill", function(d){
//     return "rgb(0, 0, " + (d * 10) + ")";
//   });

// svg.selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text(function(d){
//     return d;
//   })
//   .attr("x", function(d, i){
//     return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2
//   })
//   .attr("y", function(d){
//     return h - (d * 4) + 14;
//   })
//   .attr("font-family", "sans-serif")
//   .attr("font-size", "11px")
//   .attr("fill", "white")
//   .attr("text-anchor", "middle");

//------------------------------------------------------------------------

// var dataset = [];
// var numDataPoints = 50;
// var xRange = Math.random() * 1000;
// var yRange = Math.random() * 1000;
// for (var i = 0; i < numDataPoints; i++) {
//     var newNumber1 = Math.round(Math.random() * xRange);
//     var newNumber2 = Math.round(Math.random() * yRange);
//     dataset.push([newNumber1, newNumber2]);
// }
// var w = 500;
// var h = 300;
// var padding = 30;

// var svg = d3.select("body")
//             .append("svg")
//             .attr("width", w)
//             .attr("height", h);

// var xScale = d3.scale.linear()
//   .domain([0, d3.max(dataset, function(d){ return d[0]; })])
//   .range([padding, w - padding * 2]);

// var yScale = d3.scale.linear()
//   .domain([0, d3.max(dataset, function(d){ return d[1]; })])
//   .range([h - padding, padding]);

// var rScale = d3.scale.linear()
//   .domain([0, d3.max(dataset, function(d){ return d[1]; })])
//   .range([2, 5]);

// var xAxis = d3.svg.axis()
//   .scale(xScale)
//   .orient("bottom")
//   .ticks(5);

// var yAxis = d3.svg.axis()
//   .scale(yScale)
//   .orient("left")
//   .ticks(5);

// svg.selectAll("circle")
//   .data(dataset)
//   .enter()
//   .append("circle")
//   .attr("cx", function(d){
//     return xScale(d[0]);
//   })
//   .attr("cy", function(d){
//     return yScale(d[1]);
//   })
//   .attr("r", function(d){
//     return rScale(d[1]);
//   });

// svg.selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text(function(d){
//     return d[0] + "," + d[1];
//   })
//   .attr("x", function(d){
//     return xScale(d[0]);
//   })
//   .attr("y", function(d){
//     return yScale(d[1]);
//   })
//   .attr("font-family", "sans-serif")
//   .attr("font-size", "11px")
//   .attr("fill", "red");

// svg.append("g")
//   .attr("class", "axis")
//   .attr("transform", "translate(0," + (h - padding) + ")")
//   .call(xAxis);

// svg.append("g")
//   .attr("class", "axis")
//   .attr("transform", "translate(" + padding + ",0)")
//   .call(yAxis);
//------------------------------------------------------------------------------

