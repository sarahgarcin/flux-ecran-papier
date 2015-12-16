
$(document).ready(function(){
	
// -------- Variables --------------
	//entrez votre access token ici
	var clientID = "6068553e231c872c3a96e9deefff83e4";
	var tag = "sarah";

	$.ajax({ 
		type: 'GET', 
		url: "http://api.soundcloud.com/tracks.json?client_id="+clientID+"&q="+tag+"&limit=1", //url de récupération du json instagram
		dataType: 'json',
		//crossDomain: true, 
		success: function (data) { 
			console.log(data[0]);
			var image = data[0].artwork_url;
			var wave = data[0].waveform_url;
			var id = data[0].id;
			console.log(image);
			var iframe = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+id+"&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
			$(".soundcloud ul").append('<li><iframe width="100%" height="450" scrolling="no" frameborder="no" src="'+iframe+'"></iframe><img src="'+image+'"/><img src="'+wave+'"/></li>');

		},
		error: function() { alert('Failed!'); },
	});
});
