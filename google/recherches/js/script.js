
$(document).ready(function(){

	getSearch();
	
	// Fonctions qui récupère les médias récents à partir d'un tag sur instagram
	function getSearch(){
		$.ajax({ 
			type: 'GET', 
			url: "files/name.json", //path du fichier json
			dataType: 'json',
			success: function (data) { 
				$.each( data.event, function( i, item ) { // Itère à travers toutes les valeurs du tableaux de données
					var recherche = item.query.query_text;
					var formatDate = 0;
					$.each(item.query.id, function(a, id){
						var timestamp = id.timestamp_usec.slice(0,-3);;
						var formatTimestamp = parseInt(timestamp);
						console.log(new Date(formatTimestamp));
						var date = new Date(formatTimestamp);
						var day = date.getUTCDate();;
						var month = date.getUTCMonth() + 1;
						var year = date.getFullYear();
						var hours = date.getHours();
						var minutes = "0" + date.getMinutes();
						formatDate = day+"/"+month+"/"+year + " à " + hours + ':' + minutes.substr(-2);
					});
					$('.google .google-content ul').append("<li class='data-3 colonne'>"+recherche+"<h5>"+formatDate+"</h5></li>");
				});
			},
			error: function() { alert('Failed!'); },
		});
	}

});

