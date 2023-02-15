import { WaveSvg } from '../waveSvg/WaveSvg'
import './aboutMe.css'
export const AboutMe = () => {
	return (
		<section id='AboutMe'>
			<h2>Sobre mi.</h2>
			<WaveSvg />
			<div className='container_main_description'>
				<div className='container_description'>
					<p>
						soy desarrollador web con 2 años de experiencia. Durante mi carrera,
						he trabajado en una amplia variedad de proyectos utilizando
						tecnologías como Javascript, React, Node, Express, PostgresSQL,
						Docker, entre otras, para crear aplicaciones web atractivas y
						escalables. Uno de mis proyectos más gratificantes fue cuando
						trabajé en una aplicación de seguimiento de pedidos para una empresa
						de logística. Utilizando React y Node, desarrollé una interfaz de
						usuario intuitiva y un sistema de procesamiento de pedidos eficiente
						que ayudó a la empresa a mejorar su rendimiento en un 20%. También
						tengo experiencia en el uso de bases de datos relacionales y no
						relacionales para almacenar y gestionar datos.
					</p>
				</div>
				<div className='container_description'>
					<p>
						Además de mi experiencia en el campo, también soy estudiante de
						técnico analista en programación y he obtenido certificaciones de
						bootcamp de talento digital para Chile. Me encanta seguir
						aprendiendo y creciendo como desarrollador web, y estoy ansioso de
						aportar mis habilidades y conocimientos a proyectos emocionantes en
						el futuro. Mi objetivo es ayudar a construir soluciones increíbles
						que beneficien a mi equipo y a mi empresa. También soy muy bueno
						trabajando en equipo y tengo una comunicación efectiva, lo que me ha
						ayudado a colaborar efectivamente con mis compañeros de trabajo en
						proyectos anteriores. ¡Espero tener la oportunidad de trabajar
						contigo!
					</p>
				</div>
			</div>
		</section>
	)
}
