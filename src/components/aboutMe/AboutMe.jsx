import styles from './aboutMe.module.css'
export const AboutMe = () => {
	return (
		<section id='AboutMe' className={styles.container_section}>
			<h2 className={styles.aboutMe_title}>Sobre mi.</h2>

			<div className={styles.container_main_description}>
				<div className={styles.container_description}>
					<div>
						<article className={styles.article}>
							Soy desarrollador web con mas de 3 años de experiencia en
							proyectos variados, destacando la creación de una aplicación de
							seguimiento de pedidos que mejoró el rendimiento de una empresa de
							logística en un 20%. Mis habilidades incluyen{' '}
							<span>
								{' '}
								Javascript, Python, React, React Native, Nest, SQL, Docker, AWS
								entre otros.{' '}
							</span>
						</article>
					</div>
					<div className={styles.aboutMe_svg}>
						<svg
							viewBox='0 0 200 200'
							xmlns='http://www.w3.org/2000/svg'
							id={styles.visual}
							width='900'
							height='675'>
							<path
								fill='#3bf69c'
								d='M46.4,-56.5C60.9,-53.4,73.8,-40.8,77.9,-25.9C81.9,-11,77.1,6.3,66,15.5C54.9,24.8,37.4,26.2,25.4,27.1C13.3,28,6.7,28.5,-4.7,34.9C-16,41.3,-32,53.6,-47.8,54C-63.6,54.3,-79.3,42.6,-87.2,26.4C-95,10.3,-95,-10.3,-82.5,-20C-70,-29.7,-44.9,-28.5,-29.1,-31.2C-13.2,-33.8,-6.6,-40.3,4.7,-46.7C16,-53.2,32,-59.6,46.4,-56.5Z'
								transform='translate(100 100)'
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	)
}
