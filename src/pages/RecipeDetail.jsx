import { useParams } from 'react-router-dom'
//fetching 
import useFetch from '../hooks/useFetch'
import { useFavorites } from '../context/FavoritesContext'


export default function RecipeDetail() {
    //recipe id
    const { id } = useParams()
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
    //favs
    const { isFavorite, addFavorite, removeFavorite } = useFavorites()

    //error
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    const meal = data.meals ? data.meals[0] : null
    //gaurd
    if (!meal) return <p>Recipe not found.</p>

    const fav = isFavorite(meal.idMeal)

    //fav button
    function toggleFavorite() {
        fav ? removeFavorite(meal.idMeal) : addFavorite(meal.idMeal)
    }
    return (
        <div>
            <h1>{meal.strMeal}</h1>
            <button onClick={toggleFavorite}>{fav ? 'Remove from Favorites' : 'Add to Favorites'}</button>
            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
        </div>
    )
}

