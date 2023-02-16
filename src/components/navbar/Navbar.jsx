import { DarkMode } from './darkmode/DarkMode'
import { AiFillGithub } from 'react-icons/all'
import './navbar.css'
import { useState } from 'react'
export const Navbar = () => {
	const [menu, setMenu] = useState(false)
	const toggleMenu = () => setMenu(!menu)
	return (
		<nav>
			<div className='navbar_container_logo'>
				<button onClick={toggleMenu} className='navbar_menu_button'>
					<div className='navbar_menu_hamburger_1'></div>
					<div className='navbar_menu_hamburger_2'></div>
					<div className='navbar_menu_hamburger_3'></div>
					<div className='navbar_menu_hamburger_4'></div>
				</button>
				<div className='navbar_logo'>YeiikS</div>
			</div>

			<div className={`navbar_container_menu ${menu ? 'isActive' : ''}`}>
				<ul className='navbar_menu_ul '>
					<li className='navbar_menu_li'>
						<a href='SobreMi'>Sobre mí</a>
					</li>
					<li className='navbar_menu_li'>
						<a href='#Skills'>Skills</a>
					</li>
					<li className='navbar_menu_li'>
						<a href='#Experiencia'>Experiencia</a>
					</li>
					<li className='navbar_menu_li'>
						<a href='#Proyectos'>Proyectos</a>
					</li>
				</ul>
			</div>
			<div className='navbar_container_button'>
				<div>
					<DarkMode />
				</div>
				<div>
					<a
						href='https://github.com/YeminsonSanchez'
						target='_blank'
						rel='noopener noreferrer'>
						<AiFillGithub className='navbar_icon_github' />
					</a>
				</div>
			</div>
		</nav>
	)
}
