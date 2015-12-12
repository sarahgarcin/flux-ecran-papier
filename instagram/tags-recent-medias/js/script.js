
$(document).ready(function(){
	var accessToken = "2315819974.1fb234f.9c48c1014c30447ab77e13b337edd6ba";
	// var tag = "cutecats";
	// var tag2 = "sexy_girl";
	var tag = "cutecats";
	var tag2 = "pornfood";
	// $.getJSON("https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token="+accessToken, {
	// 	format: "json"
	// })
	// .done(function(data) {
	// 	console.log(data.data);
	// 	$.each( data.data, function( i, item ) {
	// 		console.log(item.images.standard_resolution.url);
	// 		var imagesURL = item.images.standard_resolution.url;

	// 		$('.instagram ul').append('<li><img src="'+imagesURL+'"></li>');
	// 	});

	// });
	urlArray =[];
	var count =0;

	getData(tag, "cats");
	getData(tag2, "starwars");

	function getData(tag, name){
		$.ajax({ 
			type: 'GET', 
			url: "https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token="+accessToken+"", 
			data: { get_param: 'value' }, 
			dataType: 'jsonp',
			crossDomain: true, // enable this
			success: function (data) { 
				$.each( data.data, function( i, item ) {
					//console.log(item.images.standard_resolution.url);
					var imagesURL = item.images.standard_resolution.url;
					//urlArray.push(imagesURL);
					// urlArray[count] = imagesURL;
					// console.log(urlArray[1]);
					// var randomImage = Math.floor(Math.random() * urlArray.length) + 0;
					//console.log(urlArray[count]);
					$('.instagram ul').append('<li class='+name+'><img src="'+imagesURL+'"></li>');
					count ++;
				});
			},
			error: function() { alert('Failed!'); },
		});
	}

// 	$.ajax({ 
// 		type: 'GET', 
// 		url: "https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token="+accessToken+"", 
// 		data: { get_param: 'value' }, 
// 		dataType: 'jsonp',
// 		crossDomain: true, // enable this
// 		success: function (data) { 
// 			$.each( data.data, function( i, item ) {
// 				count ++;
// 				//console.log(item.images.standard_resolution.url);
// 				var imagesURL = item.images.standard_resolution.url;
// 				//urlArray.push(imagesURL);
// 				urlArray[count] = imagesURL;
// 				console.log(urlArray);
// 				$('.instagram ul').append('<li class="chat"><img src="'+imagesURL+'"></li>');
// 			});
// 		},
// 		error: function() { alert('Failed!'); },
// 	});

// 	$.ajax({ 
// 		type: 'GET', 
// 		url: "https://api.instagram.com/v1/tags/"+tag2+"/media/recent?access_token="+accessToken+"", 
// 		data: { get_param: 'value' }, 
// 		dataType: 'jsonp',
// 		crossDomain: true, // enable this
// 		success: function (data) { 
// 			$.each( data.data, function( i, item ) {
// 				//console.log(item.images.standard_resolution.url);
// 				var imagesURL = item.images.standard_resolution.url;
// 				//urlArray.push(imagesURL);
// 				$('.instagram ul').append('<li class="girls"><img src="'+imagesURL+'"></li>');
// 			});
// 		},
// 		error: function() { alert('Failed!'); },
// 	});
// 	console.log(urlArray);

// });

// var feed = new Instafeed({
//     get: 'tagged',
//     tagName: 'awesome',
//     clientId: 'b2e87e824fde4c488b0ced5b96f5f99a'
// });
// feed.run();

// var feed = new Instafeed({
//   get: 'tagged',
//   tagName: 'cutecats',
//   //clientId: 'a1a92612735046a090a5e1082118d62e',
//   accessToken: '2315819974.a1a9261.b9b6b80c852b40f6bd2d06f0f6d4253c',
//   // template: '<a href="{{link}}"><img src="{{image}}" /></a>'
// });
// feed.run();

// var feed = new Instafeed({
//     pages: 5,
//     limit: 1,
//     get: 'tagged',
//     tagName: 'thetypein',
//     accessToken: '2315819974.a1a9261.b9b6b80c852b40f6bd2d06f0f6d4253c',
//     //clientId: 'a1a92612735046a090a5e1082118d62e'
// });
// feed.run();

// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '2163976175',
//     accessToken: '2315819974.a1a9261.b9b6b80c852b40f6bd2d06f0f6d4253c'
// });
// userFeed.run();

// $(document).ready(function(){


// });

// jQuery.fn.spectragram.accessData = {
//     accessToken: '2315819974.a1a9261.b9b6b80c852b40f6bd2d06f0f6d4253c',
//     clientID: 'a1a92612735046a090a5e1082118d62e'
// };

// $('.instagram').spectragram('getRecentTagged',{
//     query: 'caca'
// });



// jQuery(function($) {
//   $('.instagram').on('willLoadInstagram', function(event, options) {
//     console.log(options);
//   });
//   $('.instagram').on('didLoadInstagram', function(event, response) {
//     console.log(response);
//   });
//   $('.instagram').instagram({
//     hash: 'love',
//     clientId: 'a1a92612735046a090a5e1082118d62e',
//     accessToken:'2315819974.a1a9261.b9b6b80c852b40f6bd2d06f0f6d4253c'
//   });
// })

});

