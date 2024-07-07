import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    
};


export const actions: Actions = {
    logoutMethod: async ({locals}) => {

      const {error} =  await locals.supabaseClient.auth.signOut()

      if(error) {
        console.log("Logout error: ", error)


        return {
            errorMessage: false
        }
      }

      throw redirect(303, "/auth/login")

    }
};