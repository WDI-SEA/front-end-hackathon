$(document).ready(function() {

console.log("it's connected!");







$(".fancy_title").lettering();
$(".meat").lettering('lines', 'words');
$('.alcohols').lettering();
$('.sebastian').lettering('lines');


$(".alcohols *").rotate({bind:{
  click: function(){
    $(this).rotate({
      duration:4000,
      angle: 0,
      animateTo:360
      })
    }
  }
});

$(".sebastian *").rotate({bind:{
  click: function(){
    $(this).rotate({
      duration:4000,
      angle: 0,
      animateTo:360
      })
    }
  }
});



//document.ready parentheses below
});
