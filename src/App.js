import { Routes, Route, Link } from 'react-router-dom'
import HomePages from './pages/Home'
import NewsPages from './pages/News'
import ContactPages from './pages/Contact'

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/news" element={<NewsPages />} />
        <Route path="/contact" element={<ContactPages />} />
      </Routes>
    </div>
  )
}

export default App;
