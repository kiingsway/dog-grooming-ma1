import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LowercaseRedirect from './services/LowercaseRedirect'

// Placeholder pages — will be built in Part 2 & 3
const Contact = () => <main style={{ paddingTop: 'var(--nav-h)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Contact page — coming soon</p></main>
const Blog = () => <main style={{ paddingTop: 'var(--nav-h)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Blog page — coming soon</p></main>

export default function App() {
  return (
    <BrowserRouter>
      <LowercaseRedirect />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
