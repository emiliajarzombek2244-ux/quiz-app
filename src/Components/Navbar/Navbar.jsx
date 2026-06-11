// Pasek nawigacji — widoczny na każdej stronie
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={Styles.navbar}>
      {/* 📁 Podmień src na swoją grafikę: src/Assets/Images/Logo.png */}
      <img src="" alt="Logo" className={Styles.logo} />

      <div className={Styles.links}>
        <Link to="/">Start</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/biblioteka">Biblioteka</Link>
        <Link to="/info">Info</Link>
      </div>
    </nav>
  )
}

export default Navbar