$('#WA').click(function(){
  if ($('#WA').css('fill', 'lightblue')){
    $('#WA').css().replace('lightblue', 'red');
  } 
  $('#WA').css('fill', 'lightblue')
});

$('#CO').css('fill', 'blue');
$('#WY').css('fill', 'red');

function candidate_id_decoder(president){    
  if(president == '1701'){    
    return 'McCain';  
  }   
  else if(president == '1918') {    
    return 'Obama';   
  } else {    return false;   } 
} 
 
var state_data = []; 

// $.each(statejson.locals, function(key, data){
//   var president = data.races.President[''].final;   
//   var state_abbreviation = data.abbr; 
//   var datarow = { "state_abbr": state_abbreviation, "president": candidate_id_decoder(president)}; 
//   state_data.push(datarow);  
// }); 

// $('#WA').click(function(){
//   if ($('#WA').css('fill', 'red')){
//     $('').css('fill', 'blue');
//   } 
//   $('#WA').css('fill', 'red');
// });