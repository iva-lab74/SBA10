import { Link } from 'react-router-dom'
//clickable
import useFetch from '../hooks/useFetch'

export default function Home() {
    //fetching category list
    const { data, loading, error } = useFetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
    )

    //loading screen
    if (loading || !data) return <p>Loading...</p>

    //error
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {data.categories?.map((cat) => (
                    <li key={cat.idCategory}>
                        <Link to={`/category/${cat.strCategory}`}> {cat.strCategory} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
