function convert(degreeFTrue, userInput) {
    if (degreeFTrue) {
       var celsiusResult = (userInput - 32) * (5 / 9);
       return celsiusResult;
    } else { 
    	var fahrenheitResult = userInput * (9 / 5) + 32;
       return fahrenheitResult;
    }
}
document.getElementById("subButton").addEventListener("click", function() {
	var userInput = document.getElementById("userNumber").value
	var result;
	if (document.getElementById("F").checked) {
		result = convert(true, userInput);
	} else {
		result = convert(false, userInput);
	}
	document.getElementById("resultBox").innerHTML= result;
})