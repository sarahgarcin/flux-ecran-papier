
$(document).ready(function(){
	
// -------- Variables --------------
	//entrez votre access token ici
	var accessToken = "ACCESS TOKEN";

// -------- Initialisation des function --------------
	getData("cutecats", "cats", "colonne-1"); //envoie "cutecats" comme hastag, "cats" comme nom, et "colonne-1" est l'endroit dans le HTML où ajouter les images
	
	// au clic sur le bouton OK, récupère les images du tag écrit dans le champ texte
	$(".colonne-2 button").click(function(){
		var tag = $(".colonne-2 input").val();
		$('.instagram .colonne-2 li').remove();
		getData(tag, tag, "colonne-2");
	});
	
	// Fonctions qui récupère les médias récents à partir d'un tag sur instagram
	function getData(tag, name, colonne){
		$.ajax({ 
			type: 'GET', 
			url: "https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token="+accessToken+"", //url de récupération du json instagram
			data: { get_param: 'value' }, 
			dataType: 'jsonp',
			crossDomain: true, 
			success: function (data) { 
				$.each( data.data, function( i, item ) { // Itère à travers toutes les valeurs du tableaux de données
					var imagesURL = item.images.standard_resolution.url; // Récupère l'url des images en résolution standard
					var imageLegende = item.caption.text;
					var user = item.user.full_name;
					var userPicture = item.user.profile_picture;
					// Ajoute les images + la photo de profil + le nom utilisateur + la légende de la photo dans notre HTML
					$('.instagram .'+colonne).append('<li class='+name+'><img src="'+imagesURL+'"><img class="user-picture" src="'+userPicture+'" alt="profile picture"><span class="user">'+user+'</span><p>'+imageLegende+'</p></li>'); 
				});
			},
			error: function() { alert('Failed!'); },
		});
	}

});

