
$(document).ready(function(){
	
// -------- Variables --------------
	//entrez votre access token ici
	var accessToken = "ACCESS TOKEN";
	//var apiUrl= "https://graph.facebook.com/me/photos?access_token="+accessToken;
	var photosUrl = "/photos";
	var profilUrl = "";
	var profilPicUrl = "/picture"

// -------- Initialisation des function --------------
	getImages(photosUrl, "colonne-2");
	getProfil(profilUrl, "colonne-1");
	getProfilPicture(profilPicUrl, "colonne-1");
	
	function getProfil(data, colonne){
		$.ajax({ 
			type: 'GET', 
			url: "https://graph.facebook.com/me"+data+"?access_token="+accessToken, //url de récupération du json instagram
			data: { get_param: 'value' }, 
			dataType: 'jsonp',
			crossDomain: true, 
			success: function (data) { 
				console.log(data);
				var name = data.name;
				$("." + colonne)
				.append('<div class="profil"><h3>'+name+'</h3></div>');
			},
			error: function() { alert('Failed!'); },
		});
	}

	function getProfilPicture(data, colonne){
		$.ajax({ 
			type: 'GET', 
			url: "https://graph.facebook.com/me"+data+"?access_token="+accessToken, //url de récupération du json instagram
			data: { get_param: 'value' }, 
			dataType: 'jsonp',
			crossDomain: true, 
			success: function (data) { 
				//console.log(data.data.url);
				var imageURL = data.data.url;
				$("." + colonne).append('<img class="profil-picture" src="'+imageURL+'">');
			},
			error: function() { alert('Failed!'); },
		})
	}

	// Fonctions qui récupère les médias récents à partir d'un tag sur instagram
	function getImages(data, colonne){
		$.ajax({ 
			type: 'GET', 
			url: "https://graph.facebook.com/me"+data+"?access_token="+accessToken, //url de récupération du json instagram
			data: { get_param: 'value' }, 
			dataType: 'jsonp',
			crossDomain: true, 
			success: function (data) { 
				//console.log(data);
				$.each( data.data, function( i, item ) { // Itère à travers toutes les valeurs du tableaux de données
					console.log(item);
					// var imageUrl;
					// var from = item.from.name;
					// var time = item.created_time;
					// var adress;
					// if(item.place){
					// 	var place = item.place.name;
					// 	var city = item.place.location.city;
					// 	var street = item.place.location.street;
					// 	adress = place + ", " + street +", " + city;
					// }
					// else{
					// 	adress = "Pas d'adresse pour cette image";
					// }
					// $.each( item.images, function(a, image) {
					// 	imageUrl = image.source;
					// });
					// $("." + colonne)
					// .append('<li class="data-2 colonne"><img src="'+imageUrl+'"><span>'+adress+'</span><p>Posté par '+from+'</p><p>'+time+'</p></li>');
				});
			},
			error: function() { alert('Failed!'); },
		});
	}

});

