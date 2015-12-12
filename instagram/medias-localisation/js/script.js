

// -------- Variables --------------
//entrez votre access token ici
var accessToken = "ACCESS TOKEN";

// Fonctions qui récupère les médias récents à partir d'une adresse sur instagram
function getLocation(latitude, longitude){
	$.ajax({ 
		type: 'GET', 
		url: "https://api.instagram.com/v1/media/search?lat="+latitude+"&lng="+longitude+"&access_token="+accessToken, //url de récupération du json instagram
		data: { get_param: 'value' }, 
		dataType: 'jsonp',
		crossDomain: true, 
		success: function (data) { 
			$.each( data.data, function( i, item ) { // Itère à travers toutes les valeurs du tableaux de données
				console.log(data.data);
				var imagesURL = item.images.standard_resolution.url; // Récupère l'url des images en résolution standard
				// Ajoute les images dont la localisation correspond à l'adresse entrée
				$('.instagram .colonne-1').append('<li><img src="'+imagesURL+'" alt="ville"></li>'); 
			});
		},
		error: function() { alert('Failed!'); },
	});
}

//On utilise Google Map Javascript APi pour transformer l'adresse en latitude et longitude
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();

  $(document).ready(function(){
	  $('#submit').click(function(){
	  	$('.instagram .colonne-1 li').remove();
	    geocodeAddress(geocoder, map, function(callback){
	    	var lat = callback.lat;
	    	var lng = callback.lng;
	    		getLocation(lat, lng);
	    });
	  });
  });
}


function geocodeAddress(geocoder, resultsMap, callback) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      callback({lat,lng});
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

