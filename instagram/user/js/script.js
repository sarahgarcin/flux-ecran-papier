
$(document).ready(function(){
	
// -------- Variables --------------
	//entrez votre access token ici
	var accessToken = "ACCESS TOKEN";
	var userName = "grumpycat_for_you"; // nom du user instagram ici

// -------- Initialisation des function --------------
	getUserID(userName, function(id){ // fonction qui transforme le nom du user en son id
	  getUser(id, userName, "colonne-1"); //envoie l'id, le nom du user et l'objet HTML dans lequel ajouter les données
	});
	

	//au clic sur le bouton OK, récupère le nom du user, le transforme en id et affiche les infos sur le user
	$(".colonne-2 button").click(function(){
		var user = $(".colonne-2 input").val();
		$('.instagram .colonne-2 li').remove();
		getUserID(user, function(id){ // fonction qui transforme le nom du user en son id
	  	getUser(id, user, "colonne-2"); //envoie l'id, le nom du user et l'objet HTML dans lequel ajouter les données
		});
	});
	
	// Fonctions qui va chercher des informations sur un user spécifique par son user-id
	function getUser(userID, name, colonne){
		$.ajax({ 
			type: 'GET', 
			url: "https://api.instagram.com/v1/users/"+userID+"/?access_token="+accessToken, //url de récupération du json instagram
			data: { get_param: 'value' }, 
			dataType: 'jsonp',
			crossDomain: true, 
			success: function (data) { 
				console.log(data.data);
				var user = data.data.full_name; // Nom du user
				var bio = data.data.bio; // Bio du user
				var urlImage = data.data.profile_picture; // URL de l'image de profil
				var followers = data.data.counts.followed_by; // Nombres de followers
				// Ajoute les images + la photo de profil + le nom utilisateur + la légende de la photo dans notre HTML
				$('.instagram .'+colonne).append('<li class='+name+'><img src="'+urlImage+'" alt="'+user+'"><h3>'+user+'</h3><p>'+bio+'</p><p>'+followers+' Followers</p></li>'); 
		},
			error: function() { alert('Failed!'); },
		});
	}

	function getUserID(userName, callback){ 
		$.ajax({ 
			type: 'GET', 
			url: "https://api.instagram.com/v1/users/search?q="+userName+"&access_token="+accessToken, //url de récupération du json instagram
			data: { get_param: 'value' }, 
			dataType: 'jsonp',
			crossDomain: true, 
			success: function (data) { 
				var userId = data.data[0].id;
				callback(userId);
			},
			error: function() { alert('Failed!'); },
		});
	}

});

