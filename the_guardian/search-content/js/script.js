
$(document).ready(function(){
	
// -------- Variables --------------
	//entrez votre access token ici
	var apiKey = "sh4ghv85zbjjbrsfbykvtwbr";

// -------- Initialisation des function --------------

	$(".input .submit").click(function(){
		var search = $(".mot").val();
		$(".guardian ul li").remove();
		getData(search);

	});

	
	// Fonctions qui récupère les médias récents à partir d'un tag sur instagram
	function getData(search){
		$.ajax({ 
			type: 'GET', 
			url: "http://content.guardianapis.com/search?q="+search+"&api-key=test", //url de récupération du json instagram
			data: { get_param: 'value' }, 
			dataType: 'jsonp',
			crossDomain: true, 
			success: function (data) { 
				console.log(data);
				$.each( data.response.results, function( i, item ) { // Itère à travers toutes les valeurs du tableaux de données
					console.log(item);
					var title = item.webTitle;
					var date = item.webPublicationDate;
					var url = item.webUrl;
					$(".guardian ul").append('<li><h3>'+title+'</h3><h4>'+date+'</h4><a href="'+url+'">'+url+'</a></li>');
				});
			},
			error : function(httpReq,status,exception){
		    alert(status+" "+exception);
		  }
		});
	}

});

