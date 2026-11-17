import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Category from './pages/Category'
import RecipeDetail from './pages/RecipeDetail'
import Favorites from './pages/Favorites'
import Search from './pages/Search'

export default function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/category/:name">Category</Link>
      <Link to="/recipe/:id">Recipe Details</Link>
      <Link to="/search">Search</Link>


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