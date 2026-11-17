import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


export default function Category() {
    const { name } = useParams()
    //name fetching
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    )
    //errors
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>{name}</h1>
            {data.meals ? (data.meals.map((meal) => (
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
