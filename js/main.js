import { createApp, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

/* constantes */
const appid = "261235bfa7f5b14b6176a67e900f0aa0"

/* variables vue */
const affichage = ref("accueil")
const geocoding = ref([])
const infos_temperature = ref([])
const ville = ref("")
const pays = ref("")
const temperature = ref(0)
const temperature_ressentie = ref(0)
const meteo = ref("")
const meteo_img = ref("")
const vent = ref("")
const direction_vent = ref("")
const fuseau = ref("")
const nuage = ref("")
const pluie = ref("")
const neige = ref("")
const heure_lever = ref("")
const heure_coucher  =ref("")

/* variables JS */

/* functions */
function obtenirCoordonnee()
{
    const ville_input = document.forms.form_localisation.ville.value
    const pays_input = document.forms.form_localisation.pays.value
    let localisation = ville_input
    if(pays_input) localisation += "," + pays_input

    const limit = 1

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${localisation}&limit=${limit}&appid=${appid}`

    fetch(url).then(reply => reply.json()).then(infos => {
        geocoding.value = infos
        obtenirTemperature(infos[0])
    })
}

function obtenirTemperature(objet)
{
    const latitude = objet.lat
    const longitude = objet.lon
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}&lang=fr`
    fetch(url).then(reply => reply.json()).then(infos => {
        infos_temperature.value = infos
        ville.value = infos.name
        pays.value = infos.sys.country
        temperature.value = Math.round(infos.main.temp - 273.15)
        temperature_ressentie.value = Math.round(infos.main.feels_like - 273.15)
        meteo.value = infos.weather[0].description
        meteo_img.value = `http://openweathermap.org/img/wn/${infos.weather[0].icon}@2x.png`
        vent.value = Math.round(3.6 * infos.wind.speed)
        direction_vent.value = calculerDirection(infos.wind.deg)
        fuseau.value = (infos.timezone / 3600) + 'h'
        nuage.value = infos.clouds.all
        pluie.value = infos.rain ? infos.rain["1h"] : null
        neige.value = infos.snow ? infos.snow["1h"] : null
        heure_lever.value = obtenirHeure(infos.sys.sunrise)
        heure_coucher.value = obtenirHeure(infos.sys.sunset)
    })

    affichage.value = "meteo"
}

function calculerDirection(deg)
{
    switch(deg)
    {
        case 45: return " du Nord-Est"
        case 135: return " du Sud-Est"
        case 225: return " du Sud-Ouest"
        case 315: return " du Nord-Ouest"
    }

    if(deg > 45 && deg < 135) return " de l'Est"
    if(deg > 135 && deg < 225) return " du Sud"
    if(deg > 225 && deg < 315) return " de l'Ouest"
    return " du Nord"
}

function obtenirHeure(unix)
{
    let date = new Date(unix * 1000)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if(minutes < 10) minutes = '0' + minutes

    return hours + ':' + minutes
}

const root = {
    setup() {
        return {
            /* VARIABLES */
            affichage,
            infos_temperature,
            ville,
            pays,
            temperature,
            temperature_ressentie,
            meteo,
            meteo_img,
            vent,
            direction_vent,
            fuseau,
            nuage,
            pluie,
            neige,
            heure_lever,
            heure_coucher,

            /* FUNCTIONS */
            obtenirCoordonnee,
            obtenirTemperature,
        }
    }
}

createApp(root).mount('#app')