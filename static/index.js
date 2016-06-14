$('#log-in-button').click(function() {
	$.ajax({
		type: "POST",
		data: {username: $('#admin_username').val(), password: $('#admin_password').val()},
		url: '/user'
	}).success(function(res){
		console.log(res);
	});
});

$('#logout').click(function() {
	$.ajax({
		type: "GET",
		data: {username: $('#admin_username').val(), password: $('#admin_password').val()},
		url: "/auth/logout"
	});
});

$('#upload-button').click(function() {
	$.ajax({
		type: "POST",
		data: {url: $('#url').val()},
		url: "/video"
	});
	console.log("Upload Clicked")
});