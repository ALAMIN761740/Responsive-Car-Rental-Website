
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* এখানে তোমার Route থাকবে */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
