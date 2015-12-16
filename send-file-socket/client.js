var imageData = null;

$("#localfile").bind('change', function(e){
	//upload(e.originalEvent.target.files);
	imageData = e.originalEvent.target.files;
	//change the label of the button in the name of the image
	fileName = this.files[0].name;
  var dflt = $(this).attr("placeholder");
  if($(this).val()!=""){
    $(this).next().text(fileName);
  } else {
    $(this).next().text(dflt);
  }
});


$('input.submit-local-image').on('click', function(){

	if(imageData != null){
		console.log('Une image a été ajoutée');
		var f = imageData[0];
		var reader = new FileReader();
		reader.onload = function(evt){
			socket.emit("chat image", {message:message,file:evt.target.result, fileName:fileName});
		};
		reader.readAsDataURL(f);
	}
	else{
		console.log("Pas d'image chargé");
		socket.emit("chat image", message);
	}

});