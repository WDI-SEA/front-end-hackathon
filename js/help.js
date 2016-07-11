// document.addEventListener("DOMContentLoaded", function(){
//   function getData(){
//   console.log(JSON.parse(this.responseText));
//   };

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", getData);
//   oReq.open("GET", "js/data.json");
//   oReq.send();
// });

//Above works, but how to I store the data?

////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function(){
//   function getData(){
//   return JSON.parse(this.responseText);
//   };

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", getData);
//   oReq.open("GET", "js/data.json");
//   oReq.send();
//   console.log(oReq.responseText);
//   console.log(getData());
// });

// Uncaught SyntaxError: Unexpected token u in JSON at position 0getData @ primary.js:3(anonymous function) @ primary.js:13

//////////////////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function(){
//   var data = function getData(){
//   return JSON.parse(this.responseText);
//   };

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", getData);
//   oReq.open("GET", "js/data.json");
//   oReq.send();
//   console.log(oReq.responseText);
//   console.log(data);
// });




// primary.js:7 Uncaught ReferenceError: getData is not defined(anonymous function) @ primary.js:7

//////////////////////////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

// http://stackoverflow.com/questions/19213639/storing-xmlhttprequest-responsetext-into-variable

////////////////////////////////////////////////////////////////

// var data = require('data.json');

// console.log(data);

//Why isn't above understanding require?
