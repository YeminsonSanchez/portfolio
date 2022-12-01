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
                Querido reclutador, open to work: Frontend Developer
                <span>
                  <div className={styles.openWork}></div>
                </span>
              </div>
              <div className={styles.descriptionName}>
                Hola, un gusto verte por aca, me presento:{' '}
                <span> Yeminson Sanchez </span>, Desarrollador Web Frontend Junior.
              </div>
            </div>
          </div>
          <div className={styles.imgProfile}>
            <img
              src='https://res.cloudinary.com/daxltixrz/image/upload/v1669861772/IMG_20220810_091440_373_usndid.jpg'
              alt=''
            />
          </div>
        </section>

        <h2>Tecnologias</h2>

        <section id={styles.tecnologies}>
          <div className={styles.tecnologies}></div>
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
