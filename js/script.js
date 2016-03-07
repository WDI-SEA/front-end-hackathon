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

// Arc Piano

var width = 960,
    height = 500,
    outerRadius = (height - 60),
    innerRadius = outerRadius / 2.4;

var over = "ontouchstart" in window ? "touchstart" : "mouseover",
    out = "ontouchstart" in window ? "touchend" : "mouseout";

var pie = d3.layout.pie()
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .padAngle(.01)
    .value(function() { return 1; })
    .sort(null);

var arc = d3.svg.arc()
    .cornerRadius(4)
    .padRadius(outerRadius)
    .innerRadius(function(d) { return d.sharp ? innerRadius + 80 : innerRadius; });

var svg = d3.select(".piano").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + (height - 40) + ")");

var key = svg.selectAll("path")
    .data(sharpen(pie(repeat(["C", "D", "E", "F", "G", "A", "B"]))))
  .enter().append("path")
    .each(function(d, i) { d.outerRadius = outerRadius - 20; })
    .attr("class", function(d) { return "key key--" + (d.sharp ? "black" : "white"); })
    .attr("d", arc)
    .on(over, arcTween(outerRadius, 0))
    .on(out, arcTween(outerRadius - 20, 150));

function arcTween(outerRadius, delay) {
  return function() {
    d3.event.preventDefault();
    d3.select(this).transition().delay(delay).attrTween("d", function(d) {
      var i = d3.interpolate(d.outerRadius, outerRadius);
      return function(t) { d.outerRadius = i(t); return arc(d); };
    });
  };
}

function repeat(notes) {
  return notes.concat(notes, notes[0]);
}

function sharpen(keys) {
  var keyWidth = (pie.endAngle() - pie.startAngle()) / keys.length;

  for (var i = 0, n = keys.length - 1, k; i < n; ++i) {
    if (/[CDFGA]/.test((k = keys[i]).data)) {
      keys.splice(++i, 0, {
        startAngle: k.startAngle + keyWidth * .65,
        endAngle: k.endAngle + keyWidth * .35,
        padAngle: k.padAngle,
        sharp: true
      });
      ++n;
    }
    k.sharp = false;
  }

  for (var i = 0, n = keys.length; i < n; ++i) {
    keys[i].frequency = 440 * Math.pow(2, (i - 9) / 12); // 0 is middle C
  }

  return keys.sort(function(a, b) { return a.sharp - b.sharp; });
}

(function() {
  var AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext;
  if (!AudioContext) return console.error("AudioContext not supported");
  if (!OscillatorNode.prototype.start) OscillatorNode.prototype.start = OscillatorNode.prototype.noteOn;
  if (!OscillatorNode.prototype.stop) OscillatorNode.prototype.stop = OscillatorNode.prototype.noteOff;

  var context = new AudioContext;

  key.on(over + ".beep", function(d, i) {
    var now = context.currentTime,
        oscillator = context.createOscillator(),
        gain = context.createGain();
    oscillator.type = "square";
    oscillator.frequency.value = d.frequency;
    gain.gain.linearRampToValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(.6, now + .1);
    gain.gain.linearRampToValueAtTime(0, now + 1);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(0);
    setTimeout(function() { oscillator.stop(); }, 1500);
  });
})();

