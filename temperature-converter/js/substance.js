var substance = [
	{	name: "Water",
		config: {
		minValue: 0, // The gauge minimum value.
    maxValue: 100, // The gauge maximum value.
    circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
    circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
    circleColor: "#178BCA", // The color of the outer circle.
    waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
    waveCount: 5, // The number of full waves per width of the wave circle.
    waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
    waveAnimateTime: 1000, // The amount of time in milliseconds for a full wave to enter the wave circle.
    waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
    waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
    waveAnimate: true, // Controls if the wave scrolls or is static.
    waveColor: "#178BCA", // The color of the fill wave.
    waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
    textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
    textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
    valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
    displayPercent: "\xB0", // If true, a % symbol is displayed after the value.
    textColor: "#045681", // The color of the value text when the wave does not overlap it.
    waveTextColor: "#A4DBf8" // The color of the value text when the wave overlaps it.
		}
  },
  {	name: "Mercury",
  	config: {
  		minValue: -38.83, // The gauge minimum value.
	    maxValue: 356.7, // The gauge maximum value.
	    circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
	    circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
	    circleColor: "#E2E2E2", // The color of the outer circle.
	    waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
	    waveCount: 5, // The number of full waves per width of the wave circle.
	    waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
	    waveAnimateTime: 1000, // The amount of time in milliseconds for a full wave to enter the wave circle.
	    waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
	    waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
	    waveAnimate: true, // Controls if the wave scrolls or is static.
	    waveColor: "E2E2E2", // The color of the fill wave.
	    waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
	    textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
	    textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
	    valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
	    displayPercent: "\xB0", // If true, a % symbol is displayed after the value.
	    textColor: "#E2E2E2", // The color of the value text when the wave does not overlap it.
	    waveTextColor: "#2F4F4F" // The color of the value text when the wave overlaps it.
  	}
		
	},
	{	name: "Ethanol",
		config: {
			minValue: -38.83, // The gauge minimum value.
	    maxValue: 356.7, // The gauge maximum value.
	    circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
	    circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
	    circleColor: "#D86000", // The color of the outer circle.
	    waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
	    waveCount: 5, // The number of full waves per width of the wave circle.
	    waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
	    waveAnimateTime: 1000, // The amount of time in milliseconds for a full wave to enter the wave circle.
	    waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
	    waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
	    waveAnimate: true, // Controls if the wave scrolls or is static.
	    waveColor: "D86000", // The color of the fill wave.
	    waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
	    textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
	    textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
	    valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
	    displayPercent: "\xB0", // If true, a % symbol is displayed after the value.
	    textColor: "#C04800", // The color of the value text when the wave does not overlap it.
	    waveTextColor: "#F79400" // The color of the value text when the wave overlaps it.
		}
	},
	{	name: "Gasoline",
		config: {
			minValue: -38.83, // The gauge minimum value.
	    maxValue: 356.7, // The gauge maximum value.
	    circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
	    circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
	    circleColor: "#B90000", // The color of the outer circle.
	    waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
	    waveCount: 1, // The number of full waves per width of the wave circle.
	    waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
	    waveAnimateTime: 1000, // The amount of time in milliseconds for a full wave to enter the wave circle.
	    waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
	    waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
	    waveAnimate: true, // Controls if the wave scrolls or is static.
	    waveColor: "B90000", // The color of the fill wave.
	    waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
	    textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
	    textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
	    valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
	    displayPercent: "\xB0", // If true, a % symbol is displayed after the value.
	    textColor: "#B90000", // The color of the value text when the wave does not overlap it.
	    waveTextColor: "#BEB66B" // The color of the value text when the wave overlaps it.
	  }
	}
]