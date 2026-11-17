import { useSearchParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


export default function Search() {
    const [params] = useSearchParams()
    //search term
    const query = params.get('query') || ''

    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
    )

    //errors
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>Results for "{query}"</h1>
            {data.meals ? (
                data.meals.map((meal) => (
                    <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
                        <p>{meal.strMeal}</p>
                    </Link>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    )
}