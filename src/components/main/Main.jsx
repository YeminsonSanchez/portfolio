import {Card} from '../card/Card'
import styles from './main.module.css'

export const Main = () => {
  return (
    <main>
      <div className={styles.main}>
        <section id={styles.hero}>
          <div className={styles.description}>
            <div className={styles.descriptionBody}>
              <div className={styles.recruiter}>
                Querido reclutador, open to work: <span>Frontend Developer</span>
                <span>
                  <div className={styles.openWork}></div>
                </span>
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

        <h2>Proyectos</h2>

        <section id={styles.projects}>
          <div className={styles.projects}>
            <Card />
          </div>
        </section>

        <h2>Contacto</h2>

        <section id={styles.contact}>
          <div className={styles.contact}>
            <form action=''>
              <div className={styles.formGroup}>
                <label htmlFor='name'>Nombre</label>
                <input type='text' name='name' id='name' />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='message'>Mensaje</label>
                <textarea
                  name='message'
                  id='message'
                  cols='30'
                  rows='10'
                ></textarea>
              </div>
              <div className={`${styles.formGroup}`}>
                <button type='submit'>
                  <i className='fa-solid fa-paper-plane'></i>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
