$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
  supportResponsive: true,
  //container: => use @default
  size: 600,
  //viewBoxSize: => use @default
  innerRadius: 600 / 4,
  //outerRadius: => use @default
  radiusMin: 80,
  //radiusMax: use @default
  //intersectDelta: use @default
  //intersectInc: use @default
  //circleColor: use @default
  data: {
    items: [
      {
        text: "Languages",
        count: "5",
        detail: "JavaScript, Ruby, SQL, HTML5, CSS3"
      },
      {
        text: "Frameworks",
        count: "3",
        detail: "Node.js, Express.js, Rails"},  
      {
        text: "Libraries",
        count: "4",
        detail: "Sequelize, jQuery, Bootstrap, D3.js"},
      {
        text: "Data",
        count: "3",
        detail: "PostgreSQL, Microsoft Access & Excel"
      },
      {
        text: "Versioning",
        count: "3",
        detail: "Git, GitHub, SharePoint"
      },
      {
        text: "Process Strategy",
        count: "3",
        detail: "Agile, Lean, Six Sigma"
      },
        {
        text: "Other",
        count: "0",
        detail: "TBD"
      }

    ],
    eval: function (item) {return item.count;},
    description: function (item) {return item.detail},
    classed: function (item) {return item.text.split(" ").join("");}
  },
  plugins: [
    {
      name: "central-click",
      options: {
        // text: "(See more detail)",
        style: {
          "font-size": "12px",
          "font-style": "italic",
          "font-family": "Source Sans Pro, sans-serif",
          //"font-weight": "700",
          "text-anchor": "middle",
          "fill": "white",
        },
        // attr: {dy: "65px"},
        // centralClick: function() {
        //   // alert("Here is more details!!");
        // }
      }
    },
    {
      name: "lines",
      options: {
        format: [
          {// Line #0
            textField: "text",
            // classed: {count: true},
            style: {
              "font-size": "18px",
              "font-family": "Source Sans Pro, sans-serif",
              "text-anchor": "middle",
              fill: "white"
            },
            attr: {
              dy: "-20px",
              x: function (d) {return d.cx;},
              y: function (d) {return d.cy;}
            }
          },
          {// Line #1
            textField: "count",
            classed: {text: true},
            style: {
              "font-size": "16px",
              "font-family": "Source Sans Pro, sans-serif",
              "text-anchor": "middle",
              fill: "white"
            },
            attr: {
              dy: "0px",
              x: function (d) {return d.cx;},
              y: function (d) {return d.cy;}
            }
          },
          {// Line #2
            textField: "detail",
            classed: {description: true},
            style: {
              "font-size": "5px",
              "font-family": "Source Sans Pro, sans-serif",
              "text-anchor": "middle",
              fill: "white"
            },
            attr: {
              dy: "15px",
              x: function (d) {return d.cx;},
              y: function (d) {return d.cy;}
            }
          } 
        ],
        centralFormat: [
          {// Line #0
            style: {"font-size": "32px"},
            attr: {dy: "-40px"}
          },
          {// Line #1
            style: {"font-size": "26px"},
            attr: {dy: "-10px"}
          },
          {// Line #2
            style: {"font-size": "16px"},
            attr: {dy: "20px"}

          }
        ]
      }
    }]
  });
});