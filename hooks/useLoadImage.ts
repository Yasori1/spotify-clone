import { SupabaseClient, useSupabaseClient } from "@supabase/auth-helpers-react";

import {Song} from "@/types";

const useLoadImage = (song:Song )=>{
    const usesupabaseClient = useSupabaseClient();

    if (!song){
        return null;
    }

    const{ data: imageData } = supabaseClient
    .storage
    .from('images')
    .getPublicUrl(song.image_path)
}