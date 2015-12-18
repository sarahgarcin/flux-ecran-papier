
$(document).ready(function(){
	
// -------- Variables --------------
	//entrez votre access token ici
	var accessToken = "access token";
	var tag = "cat";

	$.ajax({ 
		type: 'GET', 
		url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=1&q="+tag+"&key="+accessToken, //url de récupération du json youtube
		dataType: 'jsonp',
		crossDomain: true, 
		success: function (data) { 
			console.log(data.items[0].id.videoId);
			var id = data.items[0].id.videoId;
			var url = "https://www.youtube.com/embed/"+id+"";
			$(".youtube").append('<iframe width="420" height="315" src="'+url+'" frameborder="0"></iframe>');
		},
		error: function() { alert('Failed!'); },
	});
});

