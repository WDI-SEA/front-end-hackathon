/* JSON */

    /* Mt Baker (Washington / Pnw) */
    /* From Mt Baker website */

    var dataBaker = [{
      "snow": "804",
      "year": "2006"
    }, {
      "snow": "659",
      "year": "2007"
    }, {
      "snow": "786",
      "year": "2008"
    }, {
      "snow": "548",
      "year": "2009"
    }, {
      "snow": "634",
      "year": "2010"
    }, {
      "snow": "857",
      "year": "2011"
    }, {
      "snow" : "808",
      "year": "2012"
    }, {
      "snow": "719",
      "year": "2013"
    }, {
      "snow": "623",
      "year": "2014"
    }, {
      "snow": "287",
      "year": "2015"
    }, {
    "snow" : "622",
    "year" : "2016"
    }
    ];

    /* Alta (Utah) */
    /* From Alta website */

    var dataAlta = [
    {
      "snow": "637",
      "year": "2006"
    }, {
      "snow": "389",
      "year": "2007"
    }, {
      "snow": "701",
      "year": "2008"
    }, {
      "snow": "693",
      "year": "2009"
    }, {
      "snow": "570",
      "year": "2010"
    }, {
      "snow": "723",
      "year": "2011"
    }, {
      "snow" : "390",
      "year": "2012"
    }, {
      "snow": "449",
      "year": "2013"
    }, {
      "snow": "432",
      "year": "2014"
    }, {
      "snow": "323",
      "year": "2015"
    }, {
    "snow" : "438",
    "year" : "2016"
    }
    ]

    /* Jay Peak (Vermont, Northeast region) */
    /* From Jay Peak website */

    var dataJay = [
    {
      "snow": "387",
      "year": "2006"
    }, {
      "snow": "409",
      "year": "2007"
    }, {
      "snow": "423",
      "year": "2008"
    }, {
      "snow": "394",
      "year": "2009"
    }, {
      "snow": "293",
      "year": "2010"
    }, {
      "snow": "376",
      "year": "2011"
    }, {
      "snow" : "251",
      "year": "2012"
    }, {
      "snow": "362",
      "year": "2013"
    }, {
      "snow": "319",
      "year": "2014"
    }, {
      "snow": "374",
      "year": "2015"
    }, {
    "snow" : "208",
    "year" : "2016"
    }
    ]

    /* Wolf Creek (Colorado) */
    /* From onthesnow.com */

    var dataWolf = [
    {
      "snow": "393",
      "year": "2006"
    }, {
      "snow": "284",
      "year": "2007"
    }, {
      "snow": "445",
      "year": "2008"
    }, {
      "snow": "392",
      "year": "2009"
    }, {
      "snow": "465",
      "year": "2010"
    }, {
      "snow": "304",
      "year": "2011"
    }, {
      "snow" : "334",
      "year": "2012"
    }, {
      "snow": "356",
      "year": "2013"
    }, {
      "snow": "315",
      "year": "2014"
    }, {
      "snow": "421",
      "year": "2015"
    }, {
    "snow" : "443",
    "year" : "2016"
    }
    ]

    /* Whistler */
    /* From WhistlerBlackcomb.com*/

    var dataWhistler = [
    {
      "snow": "470",
      "year": "2006"
    }, {
      "snow": "557",
      "year": "2007"
    }, {
      "snow": "401",
      "year": "2008"
    }, {
      "snow": "367",
      "year": "2009"
    }, {
      "snow": "587",
      "year": "2010"
    }, {
      "snow": "622",
      "year": "2011"
    }, {
      "snow" : "547",
      "year": "2012"
    }, {
      "snow": "437",
      "year": "2013"
    }, {
      "snow": "356",
      "year": "2014"
    }, {
      "snow": "265",
      "year": "2015"
    }, {
    "snow" : "486",
    "year" : "2016"
    }
    ]


    // All Regions

    var vis1 = d3.select("#visualisation1"),
      WIDTH = 800,
      HEIGHT = 500,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },
      xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2006,2016]),
      yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([00,900]),
      xAxis = d3.svg.axis()
      .scale(xScale),
      yAxis = d3.svg.axis()
      .scale(yScale);
      vis1.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
      yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");
      vis1.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);

    //generate line for Baker

    var lineGen = d3.svg.line()
    .x(function(dataBaker) {
      return xScale(dataBaker.year);
    })
    .y(function(dataBaker) {
      return yScale(dataBaker.snow);
    });
    vis1.append('svg:path')
    .attr('d', lineGen(dataBaker))
    .attr('stroke', 'green')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    // generate line for Alta

     var lineGen = d3.svg.line()
    .x(function(dataAlta) {
      return xScale(dataAlta.year);
    })
    .y(function(dataAlta) {
      return yScale(dataAlta.snow);
    });
    vis1.append('svg:path')
    .attr('d', lineGen(dataAlta))
    .attr('stroke', 'red')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    //generate line for Jay

    var lineGen = d3.svg.line()
    .x(function(dataJay) {
      return xScale(dataJay.year);
    })
    .y(function(dataJay) {
      return yScale(dataJay.snow);
    });
    vis1.append('svg:path')
    .attr('d', lineGen(dataJay))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    //generate line for wolf creek

    var lineGen = d3.svg.line()
    .x(function(dataWolf) {
      return xScale(dataWolf.year);
    })
    .y(function(dataWolf) {
      return yScale(dataWolf.snow);
    });
     vis1.append('svg:path')
    .attr('d', lineGen(dataWolf))
    .attr('stroke', 'yellow')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    //generate line for whister

    var lineGen = d3.svg.line()
    .x(function(dataWhistler) {
      return xScale(dataWhistler.year);
    })
    .y(function(dataWhistler) {
      return yScale(dataWhistler.snow);
    });
    vis1.append('svg:path')
    .attr('d', lineGen(dataWhistler))
    .attr('stroke', 'teal')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    //Baker Only Graph

    var vis2 = d3.select("#visualisation2"),
      WIDTH = 800,
      HEIGHT = 500,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },
      xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2006,2016]),
      yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([00,900]),
      xAxis = d3.svg.axis()
      .scale(xScale),
      yAxis = d3.svg.axis()
      .scale(yScale);
      vis2.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
      yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");
      vis2.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);

    //generate line for Baker

    var lineGen = d3.svg.line()
    .x(function(dataBaker) {
      return xScale(dataBaker.year);
    })
    .y(function(dataBaker) {
      return yScale(dataBaker.snow);
    });
    vis2.append('svg:path')
    .attr('d', lineGen(dataBaker))
    .attr('stroke', 'green')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    //Alta Only Graph

    var vis3 = d3.select("#visualisation3"),
      WIDTH = 800,
      HEIGHT = 500,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },
      xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2006,2016]),
      yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([00,900]),
      xAxis = d3.svg.axis()
      .scale(xScale),
      yAxis = d3.svg.axis()
      .scale(yScale);
      vis3.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
      yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");
      vis3.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);

    //generate line for Alta

    var lineGen = d3.svg.line()
    .x(function(dataAlta) {
      return xScale(dataAlta.year);
    })
    .y(function(dataAlta) {
      return yScale(dataAlta.snow);
    });
    vis3.append('svg:path')
    .attr('d', lineGen(dataAlta))
    .attr('stroke', 'red')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    //Jay Only Graph

    var vis5 = d3.select("#visualisation5"),
      WIDTH = 800,
      HEIGHT = 500,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },
      xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2006,2016]),
      yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([00,900]),
      xAxis = d3.svg.axis()
      .scale(xScale),
      yAxis = d3.svg.axis()
      .scale(yScale);
      vis5.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
      yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");
      vis5.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);

    //generate line for Jay

    var lineGen = d3.svg.line()
    .x(function(dataJay) {
      return xScale(dataJay.year);
    })
    .y(function(dataJay) {
      return yScale(dataJay.snow);
    });
    vis5.append('svg:path')
    .attr('d', lineGen(dataJay))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    //Wolf Only Graph

    var vis4 = d3.select("#visualisation4"),
      WIDTH = 800,
      HEIGHT = 500,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },
      xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2006,2016]),
      yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([00,900]),
      xAxis = d3.svg.axis()
      .scale(xScale),
      yAxis = d3.svg.axis()
      .scale(yScale);
      vis4.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
      yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");
      vis4.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);

    //generate line for Wolf

    var lineGen = d3.svg.line()
    .x(function(dataWolf) {
      return xScale(dataWolf.year);
    })
    .y(function(dataWolf) {
      return yScale(dataWolf.snow);
    });
    vis4.append('svg:path')
    .attr('d', lineGen(dataWolf))
    .attr('stroke', 'yellow')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    //Whistler Only Graph

    var vis6 = d3.select("#visualisation6"),
      WIDTH = 800,
      HEIGHT = 500,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },
      xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2006,2016]),
      yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([00,900]),
      xAxis = d3.svg.axis()
      .scale(xScale),
      yAxis = d3.svg.axis()
      .scale(yScale);
      vis6.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
      yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");
      vis6.append("svg:g")
      .attr("stroke","white")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);

    //generate line for Whistler

    var lineGen = d3.svg.line()
    .x(function(dataWhistler) {
      return xScale(dataWhistler.year);
    })
    .y(function(dataWhistler) {
      return yScale(dataWhistler.snow);
    });
    vis6.append('svg:path')
    .attr('d', lineGen(dataWhistler))
    .attr('stroke', 'teal')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
