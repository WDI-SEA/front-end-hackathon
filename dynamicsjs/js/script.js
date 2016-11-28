console.log("It's working");

var owl = document.getElementById("owl");
var cat = document.getElementById("catgrin");
var title = document.getElementById("title");
var greycat = document.getElementById("greycat");
var cats = document.querySelectorAll('.cats');
var browncat = document.getElementById("browncat");
var orangecat = document.getElementById("orangecat");
// var color = ['#007EFF'];

$(title).on('click', function(e) {
	e.preventDefault();
	dynamics.animate(title, {
	  translateX: 750,
	  scale: 2,
	  opacity: 0.4
	}, {
	  type: dynamics.forceWithGravity,
	  frequency: 100,
	  friction: 200,
	  duration: 5000
	});
});

$(greycat).on('click', function(e) {
	e.preventDefault();
	dynamics.animate(greycat, {
	  translateY: -200,
	  scale: 1.5,
	}, {
	  type: dynamics.forceWithGravity,
	  frequency: 100,
	  friction: 200,
	  duration: 2000
	});
});

$(orangecat).on('click', function(e) {
	e.preventDefault();
	dynamics.animate(document.querySelector('#orangecat'), {
  translateX: 100,
  translateY: 50

}, {
  type: dynamics.bounce
	})
});

$(browncat).on('click', function(e) {
	e.preventDefault();
	dynamics.animate(browncat, {
	  translateY: -250,
	  scale: .7,
	}, {
	  type: dynamics.forceWithGravity,
	  frequency: 100,
	  friction: 200,
	  duration: 1300
	});
});

$(cat).on('click', function(e) {
	console.log("bouncy cat");
		
	dynamics.animate(cat, {
	    translateY: -100,
	    scale: .5
	  }, {
	    type: dynamics.forceWithGravity,
	    bounciness: 400,
	    duration: 2000,
	    delay: 100
	  });
});

$(owl).on('click', function(e) {
	console.log("clicked owl");
	e.preventDefault();
	 	dynamics.animate(owl, {
		  translateY: -550
		}, {
  	type: dynamics.forceWithGravity
		});
		dynamics.animate(owl, {
			rotateZ: 220,
						
		}, {
			type: dynamics.forceWithGravity,
			friction: 200,
			duration:1500
		});
});



$('#allcats').on('click', function(e) {
	function animateCats() {
	  for(var i=0; i<cats.length; i++) {
	    dynamics.animate(cats[i], {
	      translateY: -100
	    }, {
	      type: dynamics.forceWithGravity,
	      bounciness: 800,
	      elasticity: 400,
	      duration: 1000,
	      delay: i * 300
	    });
	  }

	  dynamics.setTimeout(animateCats, 2500)
	}
	animateCats();
	//$("#allcats").off('click', function());
});


$('#reset').on('click', function(e) {
	 	e.preventDefault();
	 	location.reload();
});


$(function() {
  $('#cheshMode').click( function() {
  	console.log("cheshire");
    $('.body').toggleClass("cheshire", true);
  } );
} );

//spinning
$('#spinning').click(function animate1() {
	  dynamics.animate(cats, {
	    rotateZ: 180,
	    scale: 1.5
	    
	  }, {
	    type: dynamics.linear,
	    friction: 400,
	    duration: 500,
	    complete: animate2
	  })
	

	function animate2() {
	  dynamics.animate(cats, {
	    rotateZ: 360,
	    scale: 1
	    
	  }, {
	    type: dynamics.linear,
	    frequency: 600,
	    friction: 400,
	    duration: 800,
	    anticipationSize: 350,
	    anticipationStrength: 400,
	    complete: animate1
	  })
	}
});