import './aboutMe.css'
export const AboutMe = () => {
	return (
		<section id='AboutMe'>
			<h2 className='aboutMe_title'>Sobre mi.</h2>

			<div className='container_main_description'>
				<div className='container_description'>
					<div>
						<article>
							Soy desarrollador web con 5 años de experiencia en proyectos
							variados, destacando la creación de una aplicación de seguimiento
							de pedidos que mejoró el rendimiento de una empresa de logística
							en un 20%. Mis habilidades incluyen{' '}
							<span>
								{' '}
								Javascript, Python, React, React Native, Nest, SQL, Docker, AWS
								entre otros.{' '}
							</span>
						</article>
					</div>
					<div className='aboutMe_svg'>
						<svg
							viewBox='0 0 200 200'
							xmlns='http://www.w3.org/2000/svg'
							id='visual'
							width='900'
							height='675'>
							<path
								fill='#06b6d5'
								d='M46.4,-56.5C60.9,-53.4,73.8,-40.8,77.9,-25.9C81.9,-11,77.1,6.3,66,15.5C54.9,24.8,37.4,26.2,25.4,27.1C13.3,28,6.7,28.5,-4.7,34.9C-16,41.3,-32,53.6,-47.8,54C-63.6,54.3,-79.3,42.6,-87.2,26.4C-95,10.3,-95,-10.3,-82.5,-20C-70,-29.7,-44.9,-28.5,-29.1,-31.2C-13.2,-33.8,-6.6,-40.3,4.7,-46.7C16,-53.2,32,-59.6,46.4,-56.5Z'
								transform='translate(100 100)'
							/>
						</svg>
					</div>
				</div>
				{/* <div className='container_description'>
					<div className='aboutMe_svg'>
						<svg
							id='visual_2'
							viewBox='0 0 900 675'
							width='900'
							height='675'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							version='1.1'>
							<g transform='translate(388.03221452273897 461.9499138262168)'>
								<path
									d='M291 -249.4C356.3 -150.2 374.1 -30.4 334.2 48.9C294.3 128.1 196.6 166.8 119.2 176.9C41.8 187.1 -15.3 168.8 -31.8 134.5C-48.3 100.3 -24.2 50.2 -69.9 -21.1C-115.7 -92.3 -231.4 -184.6 -231.4 -268.9C-231.4 -353.3 -115.7 -429.8 -1.4 -428.6C112.8 -427.5 225.7 -348.7 291 -249.4'
									fill='#3bf69c'></path>
							</g>
						</svg>
					</div>
					<p>
						Además de mi experiencia en el campo, también soy estudiante de
						técnico analista en programación y he obtenido certificaciones de
						bootcamp de talento digital para Chile. Me encanta seguir
						aprendiendo y creciendo como desarrollador web, y estoy ansioso de
						aportar mis habilidades y conocimientos a proyectos emocionantes en
						el futuro.{''}
						<span> Mi objetivo es ayudar a construir soluciones</span> {''}
						increíbles que beneficien a mi equipo y a mi empresa. También soy
						muy bueno trabajando en equipo y tengo una comunicación efectiva, lo
						que me ha ayudado a colaborar efectivamente con mis compañeros de
						trabajo en proyectos anteriores. {''}
						<span>¡Espero tener la oportunidad de trabajar contigo! </span> {' '}
					</p>
				</div> */}
			</div>
		</section>
	)
}
