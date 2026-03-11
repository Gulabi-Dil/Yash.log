import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Post from './pages/post'

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>yash.log</span>
        <span>◆</span>
        <span>built with ♥ . 2026</span>
      </footer>
    </>
  )
}

export default App