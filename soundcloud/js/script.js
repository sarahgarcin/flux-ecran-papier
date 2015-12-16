
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
			console.log(image);
			$(".soundcloud ul").append('<li><img src="'+image+'"/><img src="'+wave+'"/></li>');

		},
		error: function() { alert('Failed!'); },
	});
});

