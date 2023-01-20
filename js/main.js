import { createApp, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

/* constantes */

/* variables vue */
const affichage = ref("accueil")

/* variables JS */


const root = {
    setup() {
        return {
            /* VARIABLES */
            affichage,

            /* FUNCTIONS */
        }
    }
}

createApp(root).mount('#app')