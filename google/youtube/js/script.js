
$(document).ready(function(){

	getVideos();
	
	// Fonctions qui récupère les médias récents à partir d'un tag sur instagram
	function getVideos(){
		$.ajax({ 
			type: 'GET', 
			url: "files/name.json", //path du fichier json
			dataType: 'json',
			success: function (data) { 
				$.each(data, function( i, item ) { // Itère à travers toutes les valeurs du tableaux de données
					//console.log(item);
					var videoUrl = "https://www.youtube.com/watch?v="+item.contentDetails.videoId;
					var videoName = item.snippet.title;
					if(item.snippet.thumbnails){
						var thumbUrl = item.snippet.thumbnails.high.url;
						$('.google .google-content ul').append('<li class="data-4 colonne"><img src="'+thumbUrl+'" atl=""><h3>'+videoName+'</h3><a href="'+videoUrl+'">'+videoUrl+'</a></li>');
					}
					
				});
			},
			error: function() { alert('Failed!'); },
		});
	}

});

