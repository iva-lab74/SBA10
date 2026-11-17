import { useFavorites } from '../context/FavoritesContext'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

//favs
export default function Favorites() {

    const { favorites } = useFavorites()
    //empty starter string
    if (favorites.length === 0) {
        return <p>No favorites yet!</p>
    }


    return (
        <div>
            <h1>Your Favorites</h1>
            {favorites.map((id) => (
                <FavoriteItem key={id} id={id} />
            ))}
        </div>
    )
}

//more on the favorited item
function FavoriteItem({ id }) {
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
    //errors
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (!data.meals) return null

    const meal = data.meals[0]

    return (
        <Link to={`/recipe/${meal.idMeal}`}>
            <p>{meal.strMeal}</p>
        </Link>
    )
}
