<?php
// Ajoute le text de l'input dans un fichier json 

  // Chemin du fichier json
  $filetxt = 'text.json';

  // vérifie si les données ont été envoyées
  if(isset($_POST['text'])) {
    // Si le formulaire est vide envoyé ve message d'erreur
    if(empty($_POST['text'])) {
        echo "Le champ texte est vide";
    }
    // Sinon récupère les données
    else {
    // récupère et ajouter le texte dans un tableau
    $data = array(
      'text'=> $_POST['text'],
    );


    // Créer une variable qui sauvegarde toutes les données
    $arr_data = array(); 

    // vérifie si le fichier existe
    if(file_exists($filetxt)) {
      // récupère les données json depuis le fichier
      $jsondata = file_get_contents($filetxt);

      // Convertir le json dans un tableau
      $arr_data = json_decode($jsondata, true);
    }

    // Ajoute les données au tableau
    $arr_data[] = $data;

    // Encode le tableau en du format JSON (JSON_PRETTY_PRINT - utilise des espaces dans le json, pour que ça soit lisible pour les humains)
    $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

    //sauvegarde le texte dans text.json
    if(file_put_contents($filetxt, $jsondata)) {
      echo 'Le texte a été envoyé';
    }
    // Renvoie un message d'erreur si les données ne peuvent pas être sauvegardées
    else echo "Erreur le texte n'a pas pu être envoyé";
    }
  }
  //Renvoie une erreur s'il n'y a pas de données
  else{
    echo "Le formulaire n'a pas été soumis";
  }
?>