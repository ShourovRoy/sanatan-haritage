import {GITA_API_KEY} from "$env/static/private"
const GITA_BASE_API = "https://bhagavad-gita3.p.rapidapi.com/v2"

const GITA_API_HEADERS = {
    'x-rapidapi-key': GITA_API_KEY,
    'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
}



export {GITA_API_KEY, GITA_BASE_API, GITA_API_HEADERS}