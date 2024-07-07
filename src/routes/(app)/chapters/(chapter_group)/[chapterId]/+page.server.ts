import { GITA_API_KEY, GITA_BASE_API } from "$lib/settings/settings";
import type { Chapter } from "../../../../../types/chapterTypes";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({params, fetch, isDataRequest}) => {


    const chapterDetails: Promise<Chapter> =   fetch(`${GITA_BASE_API}/chapters/${params.chapterId}/`, {
        method: "GET",
        headers: {
            'x-rapidapi-key': GITA_API_KEY,
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
    }).then(res => res.json())
    
    return {
        chapterDetails: isDataRequest ? chapterDetails : await chapterDetails
    }
};