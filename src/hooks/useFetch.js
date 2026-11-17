import { useState, useEffect } from 'react'

export default function useFetch(url) {

    //three pieces of state
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //side effects
    useEffect(() => {
        //try again before each re-fetch
        setLoading(true)
        setError(null)

        //parse
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Request failed')
                return res.json()
            })
            //save it
            .then((json) => setData(json))
            //catch error, so it can be shown
            .catch((err) => setError(err.message))

            .finally(() => setLoading(false))
    }, [url])

    return { data, loading, error }
}
