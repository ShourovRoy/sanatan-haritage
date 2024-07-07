import type { SupabaseClient } from "@supabase/supabase-js";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    loginMethod: async ({request, locals}) => {
        const body = await request.formData();
        const email: string = body.get("email") as string
        const password : string= body.get("password") as string
        
        
        const supabaseClient: SupabaseClient = locals.supabaseClient; 


        const {data, error} = await supabaseClient.auth.signInWithPassword({
            email,
            password,
        })

        
        if (error || !data) {
            return {
                errorMessage: "Invalid user credientials!"
            }
        }




        throw redirect(303, "/chapters")


    }
};