# Kawaii-Weather

## Project description
This was a project to do as part of the course "Advanced Techniques in JavaScript"
The goal was to learn how to use an API by following its documentation
The style was free, but necessary
This Kawaii idea came to me while looking for a background image, and I saw this one
I found the idea fun and original

## How to test the project
For security reasons, the public version of the project does not contain my API key
So, to test it yourself, you will have to get a key from the API site: https://openweathermap.org/
1. You must create an account, or log in
2. At the top right, in the drop-down menu of your account, go to "My API keys"
3. There should be an existing key.
4. If you don't have one, just enter a name for your key in the field to the right and generate it
5. Finally, check the status that it is "Active"
6. Retrieve the project
7. In the js/main.js file, change the text of the "appid" variable to your API key
8. Open the project and have fun ! :)

## Technologies
It was required to use vueJS with a SPA (Single Page Application) structure
For the CSS, the choice was free; I chose the good old basic CSS!

## Project organisation
### HTML
All the html is in the index.html file
There are also some manipulations of vueJs as well as function calls

### JavaScript
Part of the JavaScript is found in the HTML as said before
However, most of it is in js/main.js
It manages API calls and modifications of the data obtained to have the desired formats

### CSS
For CSS, I usually divide by element
So in css/style.css there are only imports of the other css files that are in /css/parts
In this section, there are three files for three elements:
1. general.css contains all the general styles for the site (fonts, text color, etc)
2. accueil.css manages the style of the home page, which is mainly the form to get the geolocation requested for the weather
3. meteo.css manages the style of the results so that it is airy since there are several lines of information
