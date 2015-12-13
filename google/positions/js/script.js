
$(document).ready(function(){

	getSearch(function(latLong){
    geocoding(latLong);
  });
	
	// Fonctions qui récupère les médias récents à partir d'un tag sur instagram
	function getSearch(callback){
		$.ajax({ 
			type: 'GET', 
			url: "files/name.json", //path du fichier json
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

