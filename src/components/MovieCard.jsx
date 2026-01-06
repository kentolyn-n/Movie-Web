import {useState, useEffect} from 'react';
import {useFav} from "./FavouriteContext";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie }) {

  const { isFav, ToggleFav } = useFav();
  const [showMessage, setShowMessage]= useState(false);

  useEffect(()=>{
    if(!showMessage) return ;

    const timer = setTimeout(()=>{
      setShowMessage(false);  
    }, 1500);

    return () => clearTimeout(timer);
  }, [showMessage]);

  const handleStarClick = (e) => {
    e.stopPropagation(); 
    e.preventDefault();   
    ToggleFav(movie);
    setShowMessage(true);
  };

  

    return (
        <div className='relative'>
            <div className='aspect-w-2 aspect-h-2'>
                <img 
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                  alt={`${movie.title} Poster`} 
                  className="poster"
                />
                
            </div>
           
            <div className="p-4">
                <h3 className='text-lg font-semibold  group-hover:text-green-400 transition-colors duration-300'>
                  {movie.title}
                </h3>
                <div className='flex items-center gap-2 mt-2 text-sm text-gray-400 justify-between '>
                  <p>
                    <span className='text-yellow-500 '>★</span>Rating: {movie.vote_average}
                  </p>
                  
                  <p className="text-xs text-gray-500">
                    {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                    
                  </p>
                  <button
                        onClick={handleStarClick}
                        aria-label="Toggle favourite"
                        className={`
                          text-lg
                          transition-transform duration-300 ease-out
                          ${isFav(movie.id) ? "scale-125" : "scale-100"}
                          active:scale-150 pr-10
                          
                        `}
                      >
                        <span
                          className={`
                            inline-block transition-colors duration-300
                            ${isFav(movie.id) ? "text-yellow-400" : "text-gray-400"}
                            hover:text-yellow-300
                          `}
                        >
                          {isFav(movie.id) ? "⭐" : "☆"}
                        </span>
                      </button>
                  {showMessage && (<div className={`absolute top-2 ${isFav(movie.id)? "bg-green-500" :"bg-red-500"} text-white text-sm px-1 py-1 rounded shadow`}>
                    {`${isFav(movie.id)? "Added to favourite" : "Removed from favourite"}`}
                  </div>)}
                </div>
            </div>
        </div>
    )

}