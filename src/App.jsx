import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


import Home from './pages/Home'
import Category from './pages/Category'
import RecipeDetail from './pages/RecipeDetail'
import Favorites from './pages/Favorites'
import Search from './pages/Search'

export default function App() {

  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  //search, smart
  function handleSearch(e) {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/search?query=${encodeURIComponent(query)}`)
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <form onSubmit={handleSearch}>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" />
          <button type="Submit">Search</button>
        </form>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}