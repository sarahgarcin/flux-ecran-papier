
$(document).ready(function(){

	getSearch(function(latLong){
    geocoding(latLong);
  });
	
	// Fonctions qui récupère les médias récents à partir d'un tag sur instagram
	function getSearch(callback){
		$.ajax({ 
			type: 'GET', 
			url: "files/positions.json", //url de récupération du json instagram
			dataType: 'json',
			success: function (data) { 
				for(var i=0; i<20; i++){
          var item = data.locations[i];
          console.log(item);
          var lat = item.latitudeE7 / 10000000;
          var lng = item.longitudeE7 / 10000000;
          var time = item.timestampMs;
          var date = new Date(parseInt(time));
          console.log(parseInt(time));
          console.log(date);
          callback({lat,lng});
				}
			},
			error : function(httpReq,status,exception){
		    alert(status+" "+exception);
		  }
		});
	}

  function geocoding(latLong){
    var lat = latLong.lat;
    var lng = latLong.lng;
    $.ajax({ 
      url: "http://nominatim.openstreetmap.org/reverse?format=json&lat="+lat+"&lon="+lng+"&zoom=18&addressdetails=1", //url de récupération du json instagram
      dataType: 'json',
      success: function (data) { 
        //console.log(data);
        var adress = data.display_name;
        $(".google-content ul").append("<li class='adress'>"+adress+"</li>");
      },
      error : function(httpReq,status,exception){
        alert(status+" "+exception);
      }
    });
  }

});

	// Fonctions qui récupère les médias récents à partir d'un tag sur instagram
	// function getSearch(callback){
	// 	$.ajax({ 
	// 		type: 'GET', 
	// 		url: "files/positions.json", //url de récupération du json instagram
	// 		dataType: 'json',
	// 		success: function (data) { 
	// 			for(var i=0; i<10; i++){
 //  					var item = data.locations[i];
 //  					var lat = item.latitudeE7 / 10000000;
 //  					var lng = item.longitudeE7 / 10000000;
 //  					callback({lat,lng});
	// 			}
	// 		},
	// 		error : function(httpReq,status,exception){
	// 	    alert(status+" "+exception);
	// 	  }
	// 	});
	// }

// function initMap() {
// 	 var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: {lat: 40.731, lng: -73.997}
//   });
//   var geocoder = new google.maps.Geocoder;
//   var infowindow = new google.maps.InfoWindow;
//   var geocoder = new google.maps.Geocoder;
//   var infowindow = new google.maps.InfoWindow;

// 	$(document).ready(function(){
// 		getSearch(function(latLong){
// 	    var lat = latLong.lat;
// 	    var lng = latLong.lng;
// 			var latLng = lat +","+lng;
//   		geocodeLatLng(geocoder, map, infowindow, latLng);
//   	});
//   });
// }

// function geocodeLatLng(geocoder,map, infowindow, latLong) {
//   var input = "40.714224,-73.961452";
//   var latlngStr = latLong.split(',', 2);
//   var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
//   console.log(latlng);
//   geocoder.geocode({'location': latlng}, function(results, status) {
//     console.log(status);
//     if (status === google.maps.GeocoderStatus.OK) {
//       if (results[1]) {
//       	map.setZoom(11);
//         var marker = new google.maps.Marker({
//           position: latlng,
//           map: map
//         });
//         infowindow.setContent(results[1].formatted_address);
//         infowindow.open(map, marker);
//         console.log(results[1].formatted_address);
//         var adress = results[1].formatted_address;
//         $(".google-content ul").append("<li>"+adress+"</li>")
//       } else {
//         window.alert('No results found');
//       }
//     } else {
//       window.alert('Geocoder failed due to: ' + status);
//     }
//   });
// }

