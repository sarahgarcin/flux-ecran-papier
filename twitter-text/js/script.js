$(document).ready(function(){
	var id = ["676488938064842754","676489978482921472", "345690956013633536"];
	var count = 0;

	for(var i=0; i<id.length; i++){
		var config = {
		  "id": id[i],
		  "domId": 'temp-content',
		  "maxTweets": 2,
		  "enableLinks": true,
		  "showImages": true,
		  "customCallback": handleTweets
		};

		twitterFetcher.fetch(config);
	}

	function handleTweets(tweets){
	  var x = tweets.length;
    var n = 0;
    var element = $("#temp-content ul");
    count ++;
    var liClass = "mix-tweet" + count;
		$("#content ul").append("<li class="+liClass+"></li>");
    for(n; n<x; n++){
    	$("<li>"+tweets[n]+"</li>").appendTo(element).each(function(){
    		var tweetContent = $(this).find("p").html();
    		var findA = '<a.*?>';
    		var findAClose = '</a>';
    		var findSpan = '<span.*?>';
    		var findSpanClose = '</span>';
				var link = new RegExp(findA, 'g');
				var linkClose = new RegExp(findAClose, 'g');
				var span = new RegExp(findSpan, 'g');
				var spanClose = new RegExp(findSpanClose, 'g');

    		var cleanTweet = tweetContent.replace(link, "").replace(linkClose, "").replace(span, "").replace(spanClose, "");
    		//onsole.log(cleanTweet);
    		var reducetweet = cleanTweet.split(/\s+/).slice(0,4).join(" ");
    		//console.log(reducetweet);
    		$("#content ul ."+liClass).append("<span>"+reducetweet+" </span>")
    		console.log($("#content ul ."+liClass).html());
    	});
  	}
	}
});
