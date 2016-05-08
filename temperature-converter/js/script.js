var debug = true;

var changeNumber = document.getElementById("input_temp");
var changeSelectionFrom = document.getElementsByName("convert_from")[0];
var changeSelectionTo = document.getElementsByName("convert_to")[0];

var convert = function(tempFrom, scaleFrom, scaleTo)
{
	if (debug) {console.log("convert arguments are " + tempFrom + " " + scaleFrom + " " + scaleTo);}

	if(scaleFrom === scaleTo)
	{
		if (debug) {console.log("scaleFrom === scaleTo");}
		return tempFrom;
	}
	else if (scaleFrom === "C")
	{
		if (scaleTo === "F")
		{
			if (debug) {console.log("C to F");}
			return ((tempFrom * 9) / 5) + 32;
		}
		else //scaleTo === K
		{
			if (debug) {console.log("C to K");}
			return tempFrom * 1 + 273;
		}
	}
	else if (scaleFrom === "F")
	{
		if (scaleTo === "C")
		{
			if (debug) {console.log("F to C");}
			return ((tempFrom - 32) * 5) / 9;
		}
		else //scateTo === K
		{
			if (debug) {console.log("F to K");}
			return (((tempFrom - 32) * 5) / 9) + 273;
		}
	}
	else //scaleFrom === K
	{
		if (scaleTo === "C")
		{
			if (debug) {console.log("K to C");}
			return tempFrom - 273;
		}
		else //scaleTo === F
		{
			if (debug) {console.log("K to F");}
			return (((tempFrom - 273) * 9) / 5) + 32;
		}
	}
}

var decimalToHex = function(d) {
    var hex = Number(d).toString(16);
    while (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

var determineColor = function(tempFrom, scaleFrom)
{
	var mappedTemp;
	var redColor;
	var greenColor;
	var blueColor;

	mappedTemp = Math.floor(convert(tempFrom, scaleFrom, "F"),0);

	if (debug) {console.log("mappedTemp = " + mappedTemp);}

	if (mappedTemp < 0)
	{
		redColor = 0;
		greenColor = 0;
		blueColor = 127;
	}
	else if (mappedTemp < 32)
	{
		redColor = 0;
		greenColor = 0;
		blueColor = (mappedTemp * 4) + 127;
	}
	else if (mappedTemp < 96)
	{
		redColor = 0;
		greenColor = (mappedTemp - 32) * 4;
		blueColor = 255;
	}
	else if (mappedTemp < 160)
	{
		redColor = (mappedTemp - 96) * 4;
		greenColor = 255;
		blueColor = 255 - redColor;
	}
	else if (mappedTemp < 224)
	{
		redColor = 255;
		greenColor = 255 - ((mappedTemp - 160) * 4);
		blueColor = 0;
	}
	else if (mappedTemp < 256)
	{
		redColor = 255 - ((mappedTemp - 224) * 4);
		greenColor = 0;
		blueColor = 0;
	}
	else
	{
		redColor = 127;
		greenColor = 0;
		blueColor = 0;
	}

	// if (debug) {console.log("rgba(" + redColor + ", " + greenColor + ", " + blueColor + ", 1)");}

	// return "rgba(" + redColor + ", " + greenColor + ", " + blueColor + ", 1)";

	if (debug) {console.log("#" + decimalToHex(redColor) + decimalToHex(greenColor) + decimalToHex(blueColor));}

	return "#" + decimalToHex(redColor) + decimalToHex(greenColor) + decimalToHex(blueColor);
}

var getDegrees = function(convertTo)
{
	if (debug) {console.log("convertTo = " + convertTo)}

	if (convertTo === "C")
	{
		return "&#x2103";
	}
	else if (convertTo === "F")
	{
		return "&#x2109";
	}
	else // convertTo === K
	{
		return "K";
	}
}

var runIt = function()
{
	var tempTo = convert(document.getElementById("input_temp").value,
		document.getElementsByName("convert_from")[0].value,
		document.getElementsByName("convert_to")[0].value);

	tempTo = tempTo * 1; // make sure it's a number

	var colorString = determineColor(document.getElementById("input_temp").value,
		document.getElementsByName("convert_from")[0].value);

	var degrees = getDegrees(document.getElementsByName("convert_to")[0].value);

	if (debug) {console.log("tempTo = " + tempTo + " and colorString " + colorString);}

	//document.getElementById("div_output").innerHTML = " " + tempTo.toFixed(2) + " " + degrees;
	//document.getElementById("div_left").style.backgroundColor = colorString;

	gauge1.update(tempTo, colorString);
}

changeNumber.addEventListener("keyup", function(){
	if (debug) {console.log("Used keyup");}
	runIt();
});

changeSelectionFrom.addEventListener("change", function(){
	runIt();
	if (debug) {console.log("Used convert_from");}
});

changeSelectionTo.addEventListener("change", function(){
	runIt();
	if (debug) {console.log("Used convert_to");}
});

runIt();