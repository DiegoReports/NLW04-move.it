import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  // Definindo o avanço do nivel de experience
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  //Calculo da porcentagem da barra
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel; 

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

      <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
        {currentExperience} xp
      </span>

      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}