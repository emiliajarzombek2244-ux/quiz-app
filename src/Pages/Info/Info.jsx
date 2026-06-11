// Strona Historia — dwa slajdy z przyciskami przejścia
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './Info.module.css'

// 📁 Importy slajdów
import Slajd1 from '../../Assets/Images/Historia1.png'
import Slajd2 from '../../Assets/Images/Historia2.png'

// 📁 Importy przycisków slajdów
import BtnSlajd1 from '../../Assets/Buttons/Historia1B.png'
import BtnSlajd2 from '../../Assets/Buttons/Historia2B.png'

// 📁 Przycisk strzałki wyjścia
import Strzalka from '../../Assets/Buttons/Strzalka.png'

function Info() {
  const navigate = useNavigate()
  const [aktualny, setAktualny] = useState(0)

  return (
    <div className={Styles.container}>

      {/* Przycisk wyjścia → prawy górny róg */}
      <button className={Styles.btnWyjscie} onClick={() => navigate('/')}>
        <img src={Strzalka} alt="Wyjście" className={Styles.strzalkaImg} />
      </button>

      {aktualny === 0 ? (
        // Slajd 1
        <div className={Styles.slajdWrapper}>
          <img src={Slajd1} alt="Slajd 1" className={Styles.slajd} />
          <button className={Styles.btnSlajd} onClick={() => setAktualny(1)}>
            <img src={BtnSlajd1} alt="Dalej" className={Styles.btnImg} />
          </button>
        </div>
      ) : (
        // Slajd 2
        <div className={Styles.slajdWrapper}>
          <img src={Slajd2} alt="Slajd 2" className={Styles.slajd} />
          <button className={Styles.btnSlajd} onClick={() => navigate('/')}>
            <img src={BtnSlajd2} alt="Menu" className={Styles.btnImg} />
          </button>
        </div>
      )}

      {/* Kropki nawigacji */}
      <div className={Styles.kropki}>
        <span className={aktualny === 0 ? Styles.kropkaAktywna : Styles.kropka} onClick={() => setAktualny(0)} />
        <span className={aktualny === 1 ? Styles.kropkaAktywna : Styles.kropka} onClick={() => setAktualny(1)} />
      </div>

    </div>
  )
}

export default Info