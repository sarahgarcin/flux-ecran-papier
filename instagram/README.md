# INSTAGRAM API

## Description
Différentes expérimentations à partir de l'API Instagram

## Installation
Pour utiliser ces scripts vous devez créer une app dans l'API d'Instagram et générer un access token.

### Créer une app
- Pour créer une app vous devez avoir un compte Instagram
- Aller sur <https://www.instagram.com/developer/>
- Cliquez sur "Register Your Application" en bas de la page
- Cliquez sur "Register a New Client" en haut à droite
- Remplissez le champ "Application Name" avec le nom de votre application et les champs "Website URL" et "Valid redirect URIs" avec une adresse URL
- Cliquez sur l'onglet "Security" et désactivez "Disable implicit OAuth"
- Entrez le Captcha et validez
- Votre application est désormais créée

### Autoriser votre application à accéder aux données et générer votre access token
- Aller à <https://smashballoon.com/instagram-feed/token/>
- Cliquez sur "Click here to get your Instagram Access Token and User ID"
- Cliquez sur "Authorize"
- L'application vous renvoie votre access token, enregistrez le quelque part


## Google Maps API
Pour le script medias-localisation, j'ai utilisé l'API Javascript de Google Maps.  
<https://developers.google.com/maps/documentation/javascript/>  
Et notamment le service de geocoding:  
<https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple>  

Pour utiliser l'API Google vous aurez besoin d'une KEY, qu'il est facile d'obtenir en cliquant sur "GET A KEY" sur la page d'accueil de l'API. 
Il faudra ensuite intégrer cette clé dans l' index.html, dans l'url au moment où est appelé le script de l'API


