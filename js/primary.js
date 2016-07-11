// document.addEventListener("DOMContentLoaded", function(){
//   function getData(){
//   console.log(JSON.parse(this.responseText));
//   };

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", getData);
//   oReq.open("GET", "js/data.json");
//   oReq.send();
// });

$(document).ready (function () {
  console.log('ready');

  $.getJSON('js/data.json', function(data) {
    console.log(data[0]);

    // return data
  });
// console.log(data[0]);
});
