$(document).ready(function(){

// alert("test");

$(".fancy_title").on("click", function(){
	$(".fancy_title").hide();
});

 $(".fancy_title").lettering();

 $(".word_split").lettering('words');

 $(".line_split").lettering('lines');

var category = ['Coffee','Seattle','Beer','Classic', 'Presidential-Race-2016', ];

  for (i = 0; i < category.length; i++) { 
    $('#submit-btn').append('<option value="' + category[i] + '">' + category[i] + '</option>')
  }

$('form').on('change',submitCategory);

function submitCategory(){

	event.preventDefault();

	currentCategory = $('#submit-btn').val();

		if (currentCategory == 'Coffee'){
			$('.calmContainer').hide();
			$('.seattleContainer').hide();
			$('.beerContainer').hide();
			$('.classicContainer').hide();
			$('.Presidential-Race').hide();
			$('.coffeeContainer').slideToggle();
		} else if(currentCategory == 'Seattle'){
			$('.seattleContainer').slideToggle();
			$('.calmContainer').hide();
			$('.coffeeContainer').hide();
			$('.beerContainer').hide();
			$('.classicContainer').hide();
			$('.presContainer').hide();
		}
		 else if (currentCategory == 'Beer'){
			$('.seattleContainer').hide();
			$('.calmContainer').hide();
			$('.coffeeContainer').hide();
			$('.classicContainer').hide();
			$('.presContainer').hide();
			$('.beerContainer').slideToggle();

		} else if (currentCategory == 'Classic'){
			$('.seattleContainer').hide();
			$('.calmContainer').hide();
			$('.coffeeContainer').hide();
			$('.classicContainer').slideToggle();
			$('.presContainer').hide();
			$('.beerContainer').hide();
		}
		 else if (currentCategory == 'Presidential-Race-2016'){
			$('.seattleContainer').hide();
			$('.calmContainer').hide();
			$('.coffeeContainer').hide();
			$('.classicContainer').hide();
			$('.presContainer').slideToggle();
			$('.beerContainer').hide();
		}
	}


});