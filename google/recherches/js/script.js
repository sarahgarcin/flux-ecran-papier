
$(document).ready(function(){

	getSearch();
	
	// Fonctions qui récupère les médias récents à partir d'un tag sur instagram
	function getSearch(){
		$.ajax({ 
			type: 'GET', 
			url: "files/recherches.json", //url de récupération du json instagram
			dataType: 'json',
			success: function (data) { 
				$.each( data.event, function( i, item ) { // Itère à travers toutes les valeurs du tableaux de données
					var recherche = item.query.query_text;
					$('.google .google-content ul').append("<li>"+recherche+"</li>");
					// $.each(item.query.id, function(a, id){
					// 	//console.log(id.timestamp_usec);
					// 	var timestamp = id.timestamp_usec.slice(0,-6);;
					// 	var formatTimestamp = parseInt(timestamp);
					// 	console.log(new Date(formatTimestamp));
					// 	// var date = new Date(formatTimestamp);
					// 	// var day = date.getDay();
					// 	// var month = date.getMonth();
					// 	// var year = date.getFullYear();
					// 	// var hours = date.getHours();
					// 	// var minutes = "0" + date.getMinutes();
					// 	// var formatDate = day+"/"+month + " à " + hours + ':' + minutes.substr(-2);
					// 	// console.log(year);
					// });
				});
			},
			error: function() { alert('Failed!'); },
		});
	}

});

