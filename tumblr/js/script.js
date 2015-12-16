
$(document).ready(function(){
	
// -------- Variables --------------
	//entrez votre access token ici
	var accessToken = "oCtUswJaVkfGcFzAg3rYn0MpOkg9h61Nw3q6gV3mWSLxJo2qlE";
	var tag = "cat";

	$.ajax({ 
		type: 'GET', 
		url: "http://api.tumblr.com/v2/tagged?tag="+tag+"&api_key="+accessToken, //url de récupération du json instagram
		dataType: 'jsonp',
		crossDomain: true, 
		success: function (data) { 
			if(data.response[0].photos){
				var imagesURL = data.response[0].photos[0].alt_sizes[2].url;
				$('.tumblr ul').append('<li><img src="'+imagesURL+'"></li>'); 
			}
		},
		error: function() { alert('Failed!'); },
	});
});

