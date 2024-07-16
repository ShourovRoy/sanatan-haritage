import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { createServerClient } from '@supabase/ssr'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "$env/static/private";
import type { SupabaseClient } from "@supabase/supabase-js";


export const supabaseHandle: Handle = async ({event, resolve}) => {

    const supabaseClient: SupabaseClient = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        cookies: {
            getAll: () => event.cookies.getAll(),
            setAll: (cookiesToSet) => {
                cookiesToSet.forEach(({ name, value, options }) => {
                event.cookies.set(name, value, { ...options, path: '/' })
                })
            },
        }
    })


    event.locals.supabaseClient = supabaseClient;


    return resolve(event)
}




const authGuardHandler: Handle = async ({event, resolve}) => {

    // get supabase client
    const supabaseClient: SupabaseClient = event.locals.supabaseClient;
    
    // get user session
    const {data, error} = await supabaseClient.auth.getUser();
    if (error) {
        event.locals.session = null
        event.locals.user = null
    }
    
    if (data) {
        // event.locals.session = data.session
        event.locals.user = data.user
    }

    const pathIdentifier = event.url.pathname;
    
    // if (pathIdentifier.includes("/chapters") && ( !event.locals.user)){
    //     return redirect(303, "/auth/login")
    // }


    if (pathIdentifier.includes("/auth/login") && event.locals.user  ){
        return redirect(303, "/chapters")
    }
    if (pathIdentifier.includes("/auth/signup") && event.locals.user  ){
        return redirect(303, "/chapters")
    }

    if (event.request.method.toUpperCase() === "GET" && pathIdentifier.includes("/auth/logout") && event.locals.user) {
        return redirect(303, "/chapters")
    }

    return resolve(event)
}





export const handle: Handle = sequence(supabaseHandle, authGuardHandler)