$('#log-in-button').click(function() {
	$.ajax({
		type: "POST",
		data: {username: $('#admin_username').val(), password: $('#admin_password').val()},
		url: '/user'
	}).success(function(res){
		console.log(res);
	});
	console.log('Clicked!');
});