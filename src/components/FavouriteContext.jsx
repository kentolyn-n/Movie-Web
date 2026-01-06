import { createContext, useContext, useEffect, useState } from "react";

 const FavContext = createContext(null);

export const useFav = () => {
 const context = useContext(FavContext);
 return context
};

export function FavouriteProvider ({children}) {
    const [favourites, setFavourites] = useState(()=>{
        const stored = localStorage.getItem("favourites");
        return stored? JSON.parse(stored) : [];
    });

   
    useEffect(()=>{
    localStorage.setItem("favourites", JSON.stringify(favourites))
    },[favourites]);

   
    const ToggleFav = (movie)=> {
        setFavourites(prev=>{
           const exist = prev.some(item=>item.id === movie.id);

           return exist? prev.filter(item=>item.id !== movie.id) :
                                    [...prev, movie];

        });
    };

    const isFav = (id) =>{
        return favourites.some(movie=> id === movie.id);
    };

    return (
        <FavContext.Provider value={{favourites, ToggleFav, isFav}}>
            {children}
        </FavContext.Provider>
    );
}


