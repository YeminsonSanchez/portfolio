import './aboutMe.css'
export const AboutMe = () => {
	return (
		<section id='AboutMe'>
			<h2 className='aboutMe_title'>Sobre mi.</h2>

			<div className='container_main_description'>
				<div className='container_description'>
					<p>
						Soy desarrollador web con 2 años de experiencia. Durante mi carrera,
						he trabajado en una amplia variedad de proyectos utilizando
						tecnologías como {''}
						<span>
							Javascript, React, Node, Express, PostgresSQL, Docker, entre otras
						</span>
						, {''} para crear aplicaciones web atractivas y escalables. Uno de
						mis proyectos más gratificantes fue cuando trabajé en una aplicación
						de seguimiento de pedidos para una empresa de logística. Utilizando
						React y Node, desarrollé una interfaz de usuario intuitiva y un
						sistema de procesamiento de pedidos eficiente que ayudó a la empresa
						a {''} <span>mejorar su rendimiento en un 20%</span>. {''} También
						tengo experiencia en el uso de bases de datos relacionales y no
						relacionales para almacenar y gestionar datos.
					</p>
				</div>
				<div className='container_description'>
					<div className='aboutMe_svg'>
						<svg
							id='visual'
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
						<span>¡Espero tener la oportunidad de trabajar contigo!</span>
					</p>
				</div>
			</div>
		</section>
	)
}
