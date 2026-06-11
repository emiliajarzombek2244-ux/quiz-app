// Strona główna — tytuł + 3 przyciski nawigacyjne
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './Home.module.css'

// 📁 Importy grafik przycisków
import QuizImg from '../../Assets/Buttons/Quiz.png'
import BrамyImg from '../../Assets/Buttons/Biblioteka.png'
import HistoriaImg from '../../Assets/Buttons/Historia_button.png'

function Home() {
  const navigate = useNavigate()

  return (
    <div className={Styles.container}>

      {/* Tytuł aplikacji */}
      <div className={Styles.tytul}>
        <span className={Styles.tytulDuzy}>Cieszyńskie</span>
        <span className={Styles.tytulMaly}>bramy</span>
      </div>

      {/* Kafelek QUIZ — duży przycisk na górze */}
      <button
        className={Styles.btnQuiz}
        onClick={() => navigate('/quiz')}
      >
        <img src={QuizImg} alt="Quiz" className={Styles.imgPelna} />
      </button>

      {/* Dolne dwa przyciski */}
      <div className={Styles.dolneRzad}>
        <button
          className={Styles.btnMaly}
          onClick={() => navigate('/info')}
        >
          <img src={HistoriaImg} alt="Historia" className={Styles.imgPelna} />
        </button>

        <button
          className={Styles.btnMaly}
          onClick={() => navigate('/biblioteka')}
        >
          <img src={BrамyImg} alt="Bramy" className={Styles.imgPelna} />
        </button>
      </div>

    </div>
  )
}

export default Home