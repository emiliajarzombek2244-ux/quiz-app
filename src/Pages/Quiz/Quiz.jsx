// Ekran quizu — jedno pytanie na stronę
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pytania from '../../Data/Questions.json'
import Styles from './Quiz.module.css'

// 📁 Importy przycisków odpowiedzi
import Btn11 from '../../Assets/Buttons/Btn11.png'
import Btn12 from '../../Assets/Buttons/Btn12.png'
import Btn13 from '../../Assets/Buttons/Btn13.png'
import Btn21 from '../../Assets/Buttons/Btn21.png'
import Btn22 from '../../Assets/Buttons/Btn22.png'
import Btn23 from '../../Assets/Buttons/Btn23.png'

const obrazki = {
  'Btn11': Btn11,
  'Btn12': Btn12,
  'Btn13': Btn13,
  'Btn21': Btn21,
  'Btn22': Btn22,
  'Btn23': Btn23,
}

function Quiz() {
  const navigate = useNavigate()
  const [aktualneId, setAktualneId] = useState(0)
  const [odpowiedzi, setOdpowiedzi] = useState([])

  const pytanie = pytania[aktualneId]
  const postep = Math.round((aktualneId / pytania.length) * 100)

  function handleOdpowiedz(nazwaPliku) {
    const noweOdpowiedzi = [...odpowiedzi, nazwaPliku]
    setOdpowiedzi(noweOdpowiedzi)

    if (aktualneId + 1 < pytania.length) {
      setAktualneId(aktualneId + 1)
    } else {
      const zapisane = JSON.parse(localStorage.getItem('wyniki') || '[]')
      zapisane.push({ odpowiedzi: noweOdpowiedzi })
      localStorage.setItem('wyniki', JSON.stringify(zapisane))
      navigate('/wynik', { state: { odpowiedzi: noweOdpowiedzi } })
    }
  }

  return (
    <div className={Styles.container}>

      {/* Górna sekcja z pytaniem */}
      <div className={Styles.naglowek}>
        <p className={Styles.pytanieNormal}>{pytanie.pytanie}</p>
        <p className={Styles.pytaniePogrubione}>{pytanie.pytaniePogrubione}</p>
      </div>

      {/* Przyciski odpowiedzi */}
      <div className={Styles.odpowiedzi}>
        {pytanie.odpowiedzi.map((nazwa) => (
          <button
            key={nazwa}
            className={Styles.btn}
            onClick={() => handleOdpowiedz(nazwa)}
          >
            <img
              src={obrazki[nazwa]}
              alt={nazwa}
              className={Styles.imgBtn}
            />
          </button>
        ))}
      </div>

      {/* Pasek postępu */}
      <div className={Styles.pasekTlo}>
        <div
          className={Styles.pasekWypelnienie}
          style={{ width: `${postep}%` }}
        />
      </div>

    </div>
  )
}

export default Quiz