var fs = require('fs-extra');

io.on("connection", function(socket){
	// receive a new local media
	socket.on("newLocalMedia", onNewLocalMedia);
}

function onNewLocalMedia(data){
	var imageBuffer = decodeBase64Image(data.file);
	var date = Date.now();
	filename = 'path/nomdelimage.jpg';
	fs.writeFile(filename , imageBuffer.data, function(err) { 
		console.log(err);
	});
  io.sockets.emit("displayNewImage", filename);
}


//Décode les images en base64
function decodeBase64Image(dataString) {
	var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
	response = {};

	if (matches.length !== 3) {
		return new Error('Invalid input string');
	}

	response.type = matches[1];
	response.data = new Buffer(matches[2], 'base64');

	return response;
}