import { GITA_API_HEADERS, GITA_BASE_API } from "$lib/settings/settings";
import type { Verse } from "../../../../../../../types/verseType";
import type {  PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params, fetch, isDataRequest}) => {
    const verseDetailsPromise: Promise< Verse> =  fetch(`${GITA_BASE_API}/chapters/${params.chapterId}/verses/${params.verseId}/`, {
        method: "GET",
        headers: GITA_API_HEADERS,
    }).then(res => res.json())


  


    return {
        verseDetailsPromise: isDataRequest? verseDetailsPromise : await verseDetailsPromise
    }
};

