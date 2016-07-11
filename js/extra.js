var draw = SVG('draw')

var text = draw.text('This is just the start, ')

text.build(true)  // enables build mode

var tspan = text.tspan('something pink in the middle ').fill('#00ff97').move(200, 70)
text.plain('and again boring at the end.')

text.build(false) // disables build mode

tspan.animate('2s').fill('#f06')





//example stuff

// var draw = SVG('drawing').size(300, 300)
// var rect = draw.rect(100, 100).attr({ fill: '#f06' })
// draw.viewbox(0, 0, 297, 210).zoom()

  // // create svg drawing
  //       var draw = SVG('drawing')

  //       // create image
  //       var image = draw.image('images/background.jpg')
  //       image.size(650, 650).y(-150)

  //       // create text
  //       var text = draw.text('SVG.JS').move(300, 0)
  //       text.font({
  //         family: 'Source Sans Pro'
  //       , size: 180
  //       , anchor: 'middle'
  //       , leading: 1
  //       })

  //       // clip image with text
  //       image.clipWith(text)



  // var rect = blankhead.size(1200, 900)
// rect.fill(head.image('img/snow-lake.jpg', 1, 10))

// rect.transform({ rotation: 125 }).transform({ rotation: 37.5 })
// rect.animate(2000, '>', 1000).move(150, 150)

// rect.animate({ ease: '<', delay: '1.5s' }).attr({ fill: '#f03' })

  // blankhead.size(800, 800)
  // blankhead.attr({
  //   fill: green
  //   // stroke: 'black'
  //   // stroke-width: 1
  //   // width: '8in'
  //   // height: '6in'
  // })
