<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

// Verifie si le fichier image est une image ou un fake
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "Le fichier est une image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "Le fichier n'est pas une image";
        $uploadOk = 0;
    }
}

// Vérifie si le fichier existe déjà
if (file_exists($target_file)) {
    echo "Désolé, le fichier existe déjà";
    $uploadOk = 0;
}

// Vérifie la taille du fichier
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Désolé, votre fichier est trop lourd";
    $uploadOk = 0;
}

// Autorise certains type de format
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Désolé, seul le JPG, JPEG, PNG & GIF sont autorisés.";
    $uploadOk = 0;
}

// Vérifie s'il y a une erreur
if ($uploadOk == 0) {
    echo "Désolé, votre fichier n'a pas pu être envoyé";
// S'il n'y a pas d'erreur: envoie le fichier image
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "Le fichier ". basename( $_FILES["fileToUpload"]["name"]). " a bien été envoyé.";
    } else {
        echo "Désolé, il y a eu une erreur dans l'envoie de votre fichier.";
    }
}
?>