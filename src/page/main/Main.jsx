import { FaMapMarkerAlt } from 'react-icons/all'
import './main.css'
export const Main = () => {
	return (
		<main>
			<span className='main_span'>Hola!</span>
			<h1 className='main_h1'>
				Soy <span>Yeminson Sanchez</span>, desarrollador Fullstack.
			</h1>
			<div className='main_ubication'>
				<FaMapMarkerAlt className='main_ubication_menu' />
				Chile
			</div>
			<p className='main_description'>
				Me caracterizo por ser una persona que trabaja en equipo priorizando la
				comunicación y empatía. Me enfoco en la legibilidad de código como
				máxima del trabajo colaborativo, realizó testing, además de mejorar
				constantemente a partir del feedback. Manejo patrones de diseño como lo
				son: MVC y SINGLETON.
			</p>
			<div className='main_buttons'>
				<button className='main_button_job'>Trabajemos</button>
				<button className='main_button_cv'>CV</button>
			</div>
		</main>
	)
}
