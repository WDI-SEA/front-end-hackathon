

  // var colorSeed = 0; not using this right
  var notes = ['&#x266b','&#x2669', '&#x266a','&#119074', '&#9839', '&#9837', '&#9838', '&#119070', '&#119074', '&#119083'];
  var colors =['#dbff75','#f2e281','#00d8a2','#f5ee89', '#849bf8','#5690cb', '#ff8bba', '#ff80da'];
 
  function init() {
    var Ease = createjs.Ease;
    createjs.CSSPlugin.install(createjs.Tween);

    createjs.Ticker.setFPS(10);
    
    var count = 200;
    while (--count >= 0) {
      
      //picking random note from array
      var randomNum = Math.floor(Math.random() * notes.length);
      //picking random color from array
      var randomCol = Math.floor(Math.random() * colors.length);
    
      // Creating a random musical character
      var note = document.createElement("div");
      note.innerHTML = notes[randomNum];
      // Styling musical character
      note.style.fontSize = "70px";
      note.style.position = "absolute";
      note.style.color = colors[randomCol];
      note.style.backgroundColor = "f5fdf5";
      
      // // Adding random character to random div on page
      // var randomDiv = Math.floor(Math.random() * divs.length);
      // document.body.appendChild(note);
      // document.getElementById(divs[randomDiv]).appendChild(note);
      document.getElementById('one').appendChild(note);
      
      var el = document.getElementById("one").classList;

      el.add('.swing');
     
    
      // one.animate({ top: '-=100px' }, 600, 'easeInOutQuint', function () { easeInCirc })

      //changes the pathe direction of each tweet   
      var a = (Math.random() * Math.PI * 2 * 16 | 0) / 16;
      // console.log("a:", a); 
      // note.style.w6bkitTransform = "rotate(" + a + "rad)";
     
      
      var d = 10;
      note.style.left = note.parentNode.innerWidth / 2 + Math.cos(a - 0.2 - Math.random()) * d + "px";
      

      note.style.top = note.parentNode.innerHeight / 2 + Math.sin(a - 0.2 - Math.random()) * d + "px";
  

      d = (Math.min(window.innerWidth, window.innerHeight) - 16) / 2 * (Math.random() * 0.3 + 0.7);
      console.log("window.innerWidth", window.innerWidth);
      
      var x = window.innerWidth / 1 + Math.cos(a) * d;
      var y = window.innerHeight / 1 + Math.sin(a) * d;

      createjs.Tween.get(note, {loop: true}, true).set({opacity: "0"}, note.style).wait(Math.random() * 1000 + 1 | 0).to({top: y, left: x, width: 16, height: 4, opacity: 1}, Math.random() * 15000 + 9000, Ease.getPowIn(4));

  
      //this version updates the color of the divs
      // createjs.Tween.get(box, {loop: true}, true).set({opacity: "0"}, box.style).wait(Math.random() * 1000 + 1 | 0).call(updateColor).to({top: y, left: x, width: 16, height: 4, opacity: 1}, Math.random() * 3000 + 3000, easeIn);
    }
    // tween the base color that divs will be assigned when they start moving:
    // createjs.Tween.get(this, {loop: true}).to({colorSeed: 360}, 3000);
  }
// not using this
  // function updateColor(tween) {
  //   // grab the tween's target (the style object), and update it's color
  //   tween._target.style.backgroundColor = "hsl(" + (Math.random() * 60 + colorSeed | 0) + ",100%,50%)";
  // }

  // very simple easing equation:
  function easeIn(ratio) {
    console.log("RATIO:", ratio)
    return ratio * ratio;
  }

  function Ease() {
    throw "Ease cannot be instantiated.";
  }






