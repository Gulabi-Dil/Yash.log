import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Post from './pages/post'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './components/NotFound'
function App() {
  
  return (
    <>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>yash.log</span>
        <span>built with ♥ . 2026</span>
      </footer>
    </>
  )
}

export default App