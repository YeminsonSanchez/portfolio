import {Card} from '../card/Card'
import styles from './main.module.css'

export const Main = () => {
  return (
    <main>
      <div className={styles.main}>
        <section id={styles.hero}>
          <div className={styles.description}>
            <div className={styles.descriptionBody}>
              <div>
                Open to work: <span>Frontend Developer</span>
              </div>
              <div>
                Hola, un gusto verte por aca, me presento:{' '}
                <strong>Yeminson Sanchez</strong>, Desarrollador Web Frontend
                con 1 año de experiencia.
              </div>
            </div>
          </div>
          <div className={styles.imgProfile}>
            <img src='./../public/pexels-photo-7915524.webp' alt='' />
          </div>
        </section>

        <h2>Poyectos</h2>

        <section id={styles.projects}>
          <div className={styles.projects}>
            <Card />
          </div>
        </section>
      </div>
    </main>
  )
}
