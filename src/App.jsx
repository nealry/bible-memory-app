import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Scramble from './pages/Scramble'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scramble" element={<Scramble />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App