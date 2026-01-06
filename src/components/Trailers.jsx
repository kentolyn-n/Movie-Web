import { useState, useEffect } from "react";
import { fetchTrailerVideos } from "../service/apiService";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function Trailers({movieId, open}) {
    const [trailerKey, setTrailerKey] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if (!open || !movieId) return;
        async function getTrailers() {
            setLoading(true);
            const data = await fetchTrailerVideos(movieId);
            

            const trailers = data.results?.find((video)=>
                video.site === "YouTube" && video.type === "Trailer"
            );

            setTrailerKey(trailers?.key || null);

        }
        getTrailers();
    },[movieId, open]);
    if (!open) return null;
    
    console.log(API_KEY)

     return (
    <iframe
      className="w-full aspect-video rounded-xl"
      src={`https://www.youtube.com/embed/${trailerKey}`}
      title="Movie Trailer"
      frameBorder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}



