import { useContext } from 'react'
import { FaMapMarkerAlt } from 'react-icons/all'
import { WaveMain } from '../../components/waveMain/WaveMain'
import { DarkModeContext } from '../../context'
import styles from './main.module.css'
export const Main = () => {
	const { isDarkMode } = useContext(DarkModeContext)
	return (
		<main>
			<span className={styles.main_span}>Hola!</span>
			<p className={`${styles.main_h1} ${isDarkMode ? styles.dark_mode : ''}`}>
				Soy <span className={styles.name}>Yeminson Sanchez</span>,
			</p>
			<p className={`${styles.main_h1} ${isDarkMode ? styles.dark_mode : ''}`}>
				desarrollador Fullstack.
			</p>{' '}
			<div className={styles.main_ubication}>
				<FaMapMarkerAlt className={styles.main_ubication_menu} />
				<p className={`${isDarkMode ? styles.dark_mode : ''}`}>Chile</p>
			</div>
			<p
				className={`${styles.main_description} ${
					isDarkMode ? styles.dark_mode : ''
				}`}>
				Soy comunicativo, empático, colaborativo y confiable.
			</p>
			<p
				className={`${styles.main_description} ${
					isDarkMode ? styles.dark_mode : ''
				}`}>
				Tengo habilidades para resolver conflictos y liderazgo efectivo.
			</p>
			<p
				className={`${styles.main_description} ${
					isDarkMode ? styles.dark_mode : ''
				}`}>
				Soy adaptable y tengo una fuerte ética de trabajo.
			</p>
			<div className={styles.main_buttons}>
				<button className={styles.main_button_job}>
					<a
						href='https://www.linkedin.com/in/yeminsonsanchez'
						target='_blank'
						rel='noreferrer'>
						Trabajemos
					</a>
				</button>
				<button className={styles.main_button_cv}>CV</button>
			</div>
			<WaveMain />
		</main>
	)
}
