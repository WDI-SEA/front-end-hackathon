window.addEventListener('load',function(e) {

 
  var Q = window.Q = Quintus().include("Sprites, Scenes, 2D, Input")
                              .setup({ width: 1000, height: 600 });

 
  function drawLines(ctx) {
    ctx.save();
    ctx.strokeStyle = '#FFFFFF';
 
    ctx.restore();
  }

 
  Q.scene("start",function(stage) {

 
    var sprite1 = new Q.Sprite({ x: 200, y: 100, asset: 'pac.png', 
                                 angle: 0, collisionMask: 1, scale: .5});
   
    stage.insert(sprite1);

 
    sprite1.add('2d')

    sprite1.on('step',function() {

    });

    var sprite5 = new Q.Sprite({ x: 700, y: 100, asset: 'ghost.png', 
                                 angle: 0, collisionMask: 1, scale:.5});
  
    stage.insert(sprite5);

 
     sprite5.add('2d')

    sprite5.on('step',function() {

    });

 
    var sprite2 = new Q.Sprite({ x: 500, y: 600, w: 300, h: 75 });
    sprite2.draw= function(ctx) {
      ctx.fillStyle = '#151515';
      ctx.fillRect(-this.p.cx,-this.p.cy,this.p.w,this.p.h);
    };
    stage.insert(sprite2);

    var sprite3 = new Q.Sprite({ x: 100, y: 600, w: 300, h: 75 });
    sprite3.draw= function(ctx) {
      ctx.fillStyle = '#151515';
      ctx.fillRect(-this.p.cx,-this.p.cy,this.p.w,this.p.h);
    };
    stage.insert(sprite3);

    var sprite4 = new Q.Sprite({ x: 800, y: 400, w: 200, h: 75 });
    sprite4.draw= function(ctx) {
      ctx.fillStyle = '#151515';
      ctx.fillRect(-this.p.cx,-this.p.cy,this.p.w,this.p.h);
    };
    stage.insert(sprite4);
 
    Q.input.on('up',stage,function(e) { 
     // sprite1.p.vy += 50;
    });

    Q.input.on('down',stage,function(e) { 
      // sprite1.p.scale += 0.1;
    });

    Q.input.on('left',stage,function(e) {
      sprite1.p.x -= 20;
    });

    Q.input.on('right',stage,function(e) {
      sprite1.p.x += 20;
    });

    Q.input.on('fire',stage,function(e) {
      sprite1.p.vy = -600;
    });

    Q.input.on('action',stage,function(e) {
      sprite1.p.x = 500;
      sprite1.p.y = 100;
    });

 
    stage.on('postrender',drawLines);
  });

  Q.load('pac.png',function() {

 
    Q.stageScene("start");

 
    Q.debug = true;


 
    Q.input.keyboardControls();
  });

});