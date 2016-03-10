$(document).ready(function() {

dragula([left, right], {removeOnSpill: true});

$('#newtask').on('submit', function(e) {
  e.preventDefault();
  var $newTask = $('#newtask input').val();
  if ($newTask != '') {
    $('#newtask input').val('');
    $('#left').append('<h4>' + $newTask + '</h4>'); 
  };
});

});