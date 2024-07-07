import type { SupabaseClient } from "@supabase/supabase-js";
import { error, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {
    
};

export const actions: Actions = {
    signupMethod: async ({request, locals}) => {
        const body = await request.formData();
        const email: string = body.get("email") as string
        const password : string= body.get("password") as string
        
        
        const supabaseClient: SupabaseClient = locals.supabaseClient; 


        const {data, error: signupError} = await supabaseClient.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username: email+password
                }
            }
        })

        if (signupError || !data) {
         
            return {
                errorMessage: "Signup failed!"
            }
        }


        throw redirect(303, "/chapters")


    }
};