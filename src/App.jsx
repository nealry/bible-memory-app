import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Scramble from './pages/Scramble'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scramble" element={<Scramble />} />
      </Routes>
    </HashRouter>
  )
}

export default App