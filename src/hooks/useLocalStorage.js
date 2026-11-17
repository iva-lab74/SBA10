import { useState, useEffect } from 'react'

export  function useLocalStorage(key, initialValue) {

    //storage/key is name
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key)

        return stored ? JSON.parse(stored) : initialValue
    })

    return [value, setValue];

}  