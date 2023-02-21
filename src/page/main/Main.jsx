import { FaMapMarkerAlt } from 'react-icons/all'
import './main.css'
export const Main = () => {
	return (
		<main>
			<span className='main_span'>Hola!</span>
			<p className='main_h1'>
				Soy <span>Yeminson Sanchez</span>,
			</p>
			<p className='main_h1'>desarrollador Fullstack.</p>
			<div className='main_ubication'>
				<FaMapMarkerAlt className='main_ubication_menu' />
				<p>Chile</p>
			</div>
			<p className='main_description'>
				Soy comunicativo, empático, colaborativo y confiable.
			</p>
			<p className='main_description'>
				Tengo habilidades para resolver conflictos y liderazgo efectivo.
			</p>
			<p className='main_description'>
				Soy adaptable y tengo una fuerte ética de trabajo.
			</p>

			<div className='main_buttons'>
				<button className='main_button_job'>Trabajemos</button>
				<button className='main_button_cv'>CV</button>
			</div>
		</main>
	)
}
