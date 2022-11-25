import styles from './header.module.css'

export const Header = () => {
  return (
    <header>
      <section className={styles.top_nav}>
        <div>YemDev</div>
        <input id={styles.menu_toggle} type='checkbox' />
        <label
          className={styles.menu_button_container}
          htmlFor={styles.menu_toggle}
        >
          <div className={styles.menu_button}></div>
        </label>
        <ul className={styles.menu}>
          <li>Sobre mi</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </section>
    </header>
  )
}
