import { GITA_API_HEADERS, GITA_BASE_API } from "$lib/settings/settings";
import type { LayoutServerLoad } from "../../$types";
import type { Verse } from "../../../../../types/verseType";


export const load: LayoutServerLoad = async ({fetch, params, isDataRequest}) => {


  const versesList: Promise< Verse[]> =  fetch(`${GITA_BASE_API}/chapters/${params.chapterId}/verses/`, {
        method: "GET",
        headers: GITA_API_HEADERS,
    }).then(res => res.json())
    
 
    


    return {
        versesList: isDataRequest? versesList :  versesList
    }
};