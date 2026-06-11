// Główny plik aplikacji — routing
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Biblioteka from './Pages/Biblioteka/Biblioteka'
import Info from './Pages/Info/Info'
import Wynik from './Pages/Wynik/Wynik'

function App() {
  return (
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/quiz"     element={<Quiz />} />
      <Route path="/wynik"    element={<Wynik />} />
      <Route path="/biblioteka" element={<Biblioteka />} />
      <Route path="/info"     element={<Info />} />
    </Routes>
  )
}

export default App