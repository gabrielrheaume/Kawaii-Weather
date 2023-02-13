# Kawaii-Weather

## Description du projet
Ceci était un projet à faire dans le cadre du cours "Techniques avancés en JavaScript"  
Le but était d'apprendre à utiliser un API en suivant sa documentation  
Le style était libre, mais nécessaire  
Cette idée de Kawaii m'est venu en cherchant une image de fond, et j'ai vue celle-ci  
J'ai trouvée l'idée amusante et originale

## Comment tester le projet
Pour des raisons de sécurité, la version publique du projet ne contient pas ma clé d'API  
Ainsi, pour le tester par vous-même, il faudra en récupérer une à sur le site de l'API : https://openweathermap.org/
1. Il faut créer une compte, ou se connecter
2. En haut à droite, dans le menu déroulant de votre compte, aller dans "My API keys"
3. Il devrait y avoir une clé déjà existante.
4. Si vous n'en avez pas, il suffit, dans le champ à droite, d'entrer un nom pour votre clé et de la générer
5. Finalement, vérifiez le status qu'il soit bien "Active"
6. Récupérer le projet
7. Dans le fichier js/main.js, changer le texte de la variable "appid" par votre clé API
8. Ouvrez le projet et amusez-vous ! :)

## Technologies
Il était requis d'utiliser vueJS avec une structure SPA (Single Page Application)  
Pour le CSS, le choix était libre ; j'ai choisi le bon vieux CSS de base !

## Organisation du projet
### HTML
Tout le html se trouve dans le fichier index.html  
On y retrouve aussi quelques manipulations de vueJs ainsi que des appels de fonctions

### JavaScript
Une partie du JavaScript se retrouve dans le HTML comme dit précédemment  
Néanmoins, la majeure partie se retrouve dans js/main.js  
On y gère les appels d'API et les modifications des données obtenues pour avoir les formats voulus

### CSS
Pour le CSS, j'ai l'habitude de division par élément  
Ainsi, dans css/style.css, il n'y a que des importations des autres fichiers css qui se trouvent dans /css/parts  
Dans cette section, on y retrouve trois fichiers pour trois éléments :
1. general.css contient tous les styles généraux au site (les polices de caractère, la couleur des textes, etc)
2. accueil.css gère le style de la page d'accueil, qui est principalement le formulaire pour obtenir la géolocalisation demandé pour la météo
3. meteo.css gère le style des résultats pour que ce soit aéré puisqu'il y a plusieurs lignes d'information
