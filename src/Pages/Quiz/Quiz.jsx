// Ekran quizu — jedno pytanie na stronę
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pytania from '../../Data/Questions.json'
import Styles from './Quiz.module.css'

function Quiz() {
  const navigate = useNavigate()

  // Aktualny numer pytania (zaczynamy od 0)
  const [aktualneId, setAktualneId] = useState(0)

  // Zebrane odpowiedzi użytkownika
  const [odpowiedzi, setOdpowiedzi] = useState([])

  const pytanie = pytania[aktualneId]
  const postep = Math.round(((aktualneId) / pytania.length) * 100)

  // Obsługa kliknięcia odpowiedzi
  function handleOdpowiedz(nazwaPliku) {
    const noweOdpowiedzi = [...odpowiedzi, nazwaPliku]
    setOdpowiedzi(noweOdpowiedzi)

    if (aktualneId + 1 < pytania.length) {
      // Przejdź do następnego pytania
      setAktualneId(aktualneId + 1)
    } else {
      // Quiz skończony — zapisz do localStorage i przejdź dalej
      const zapisane = JSON.parse(localStorage.getItem('wyniki') || '[]')
      zapisane.push({ odpowiedzi: noweOdpowiedzi })
      localStorage.setItem('wyniki', JSON.stringify(zapisane))
      navigate('/wynik', { state: { odpowiedzi: noweOdpowiedzi } })
    }
  }

  return (
    <div className={Styles.container}>

      {/* Górna sekcja z pytaniem — ciemne tło */}
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
            {/* 📁 Grafiki przycisków z src/Assets/Buttons/ */}
            <img
              src={`/src/Assets/Buttons/${nazwa}.png`}
              alt={nazwa}
              className={Styles.imgBtn}
            />
          </button>
        ))}
      </div>

      {/* Pasek postępu na dole */}
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