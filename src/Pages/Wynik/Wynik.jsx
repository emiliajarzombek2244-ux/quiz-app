// Ekran wynikowy — pokazuje kartę bramy dopasowaną do odpowiedzi
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Styles from './Wynik.module.css'

// 📁 Importy kart wynikowych
import KartaA from '../../Assets/Images/A.jpg'
import KartaB from '../../Assets/Images/B.png'
import KartaC from '../../Assets/Images/C.png'
import KartaD from '../../Assets/Images/D.png'

// 📁 Importy ekranów bram
import BramaA from '../../Assets/Images/A2.png'
import BramaB from '../../Assets/Images/B2.png'
import BramaC from '../../Assets/Images/C2.png'
import BramaD from '../../Assets/Images/D2.png'

// 📁 Importy przycisków
import BtnChce from '../../Assets/Buttons/Chcezobaczyc.png'
import BtnMenu from '../../Assets/Buttons/Menu.png'

// Logika dopasowania odpowiedzi do bramy
function dopasujBrame(odpowiedzi) {
  const klucz = odpowiedzi.join('+')
  const mapa = {
    '1.1+2.1': 'A',
    '1.1+2.2': 'B',
    '1.1+2.3': 'C',
    '1.2+2.1': 'B',
    '1.2+2.2': 'C',
    '1.2+2.3': 'D',
    '1.3+2.1': 'C',
    '1.3+2.2': 'D',
    '1.3+2.3': 'A',
  }
  return mapa[klucz] || 'A'
}

const karty = { A: KartaA, B: KartaB, C: KartaC, D: KartaD }
const bramy = { A: BramaA, B: BramaB, C: BramaC, D: BramaD }

function Wynik() {
  const navigate = useNavigate()
  const location = useLocation()

  // Pobierz odpowiedzi przekazane z quizu
  const odpowiedzi = location.state?.odpowiedzi || []
  const brama = dopasujBrame(odpowiedzi)

  // Stan — czy pokazujemy kartę czy ekran bramy
  const [pokazBrame, setPokazzBrame] = useState(false)

  return (
    <div className={Styles.container}>
      {!pokazBrame ? (
        <>
          {/* Karta wynikowa */}
          <img
            src={karty[brama]}
            alt={`Karta ${brama}`}
            className={Styles.karta}
          />
          {/* Przycisk Chcę ją zobaczyć */}
          <button
            className={Styles.btn}
            onClick={() => setPokazzBrame(true)}
          >
            <img src={BtnChce} alt="Chcę ją zobaczyć" className={Styles.btnImg} />
          </button>
        </>
      ) : (
        <>
          {/* Ekran bramy */}
          <img
            src={bramy[brama]}
            alt={`Brama ${brama}`}
            className={Styles.karta}
          />
          {/* Przycisk Menu */}
          <button
            className={Styles.btn}
            onClick={() => navigate('/')}
          >
            <img src={BtnMenu} alt="Menu" className={Styles.btnImg} />
          </button>
        </>
      )}
    </div>
  )
}

export default Wynik