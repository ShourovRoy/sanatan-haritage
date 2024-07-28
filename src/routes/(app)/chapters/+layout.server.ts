import { GITA_API_KEY, GITA_BASE_API } from "$lib/settings/settings";
import type { Chapter } from "../../../types/chapterTypes";

export const load = async ({fetch, isDataRequest, locals}) => {
    const gitaChapterRes: Promise<Chapter[]> =  fetch(`${GITA_BASE_API}/chapters/?skip=0&limit=18`, {
        method: "GET",
        headers: {
            'x-rapidapi-key': GITA_API_KEY,
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
    }).then((res : any) => res.json())


    return {
        gitaChapters: isDataRequest ? gitaChapterRes : await gitaChapterRes
    }


};