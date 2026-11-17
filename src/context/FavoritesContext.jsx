import { createContext, useContext } from 'react'
//favorites stay in local storage
import {useLocalStorage} from '../hooks/useLocalStorage'

//container, stated
const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
    //stores favorites in an array
    const [favorites, setFavorites] = useLocalStorage('favorites', [])

    //favorites list
    function isFavorite(id) {
        return favorites.includes(id)
    }

    //prev add id
    function addFavorite(id) {
        setFavorites((prev) => [...prev, id])
    }
    //remove that id 
    function removeFavorite(id) {
        setFavorites((prev) => prev.filter((f) => f !== id))
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )


}
//makes a shorter call function
export function useFavorites() {
    return useContext(FavoritesContext)
}