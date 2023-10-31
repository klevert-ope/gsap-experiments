import {supabaseKey, supabaseURL} from "@/supabase/Supabase";

export async function fetchVideo(videoPath) {
    const response = await fetch(
        `${supabaseURL}/storage/v1/object/public/${videoPath}`,
        {
            headers: {
                apikey: supabaseKey,
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch video");
    }

    return response.url;
}
