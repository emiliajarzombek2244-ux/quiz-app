// Strona Biblioteka — siatka 4 bram + widok szczegółowy
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './Biblioteka.module.css'

// 📁 Tło z tytułem
import TloBiblioteka from '../../Assets/Images/Bibliotekabram.png'

// 📁 Przyciski kolaży w siatce
import Btn1 from '../../Assets/Buttons/Biblioteka1.png'
import Btn2 from '../../Assets/Buttons/Biblioteka2.png'
import Btn3 from '../../Assets/Buttons/Biblioteka3.png'
import Btn4 from '../../Assets/Buttons/Biblioteka4.png'

// 📁 Karty szczegółowe
import Karta1 from '../../Assets/Images/BI1.png'
import Karta2 from '../../Assets/Images/BI2.png'
import Karta3 from '../../Assets/Images/BI3.png'
import Karta4 from '../../Assets/Images/BI4.png'

// 📁 Przycisk powrotu
import BtnInne from '../../Assets/Buttons/Innebramy.png'

// Poprawiona kolejność kart
const bramy = [
  { btn: Btn1, karta: Karta2 },
  { btn: Btn2, karta: Karta3 },
  { btn: Btn3, karta: Karta1 },
  { btn: Btn4, karta: Karta4 },
]

function Biblioteka() {
  const navigate = useNavigate()
  const [aktywna, setAktywna] = useState(null)

  return (
    <div className={Styles.container}>
      {aktywna === null ? (
        <>
          {/* Tło z tytułem */}
          <img src={TloBiblioteka} alt="Biblioteka" className={Styles.tlo} />

          {/* Siatka 2x2 */}
          <div className={Styles.siatka}>
            {bramy.map((brama, i) => (
              <button
                key={i}
                className={Styles.btnBrama}
                onClick={() => setAktywna(i)}
              >
                <img src={brama.btn} alt={`Brama ${i + 1}`} className={Styles.btnImg} />
              </button>
            ))}
          </div>
        </>
      ) : (
        // Widok szczegółowy
        <div className={Styles.szczegol}>
          <img
            src={bramy[aktywna].karta}
            alt={`Karta ${aktywna + 1}`}
            className={Styles.karta}
          />
          <button className={Styles.btnInne} onClick={() => setAktywna(null)}>
            <img src={BtnInne} alt="Inne bramy" className={Styles.btnImg} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Biblioteka