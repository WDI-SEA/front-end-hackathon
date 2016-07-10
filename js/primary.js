 document.addEventListener("DOMContentLoaded", function(){
  function getData(){
    console.log(JSON.parse(this.responseText));
  };

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", getData);
  oReq.open("GET", "js/data.json");
  oReq.send();

});
