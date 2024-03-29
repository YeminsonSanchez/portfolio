import { useState } from 'react'
import { AiFillGithub } from 'react-icons/all'
import { Theme } from '../theme/Theme'
import './navbar.css'
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

				<div className='logo_item'>
					<Theme />
					<a
						href='https://github.com/YeminsonSanchez'
						target='_blank'
						rel='noreferrer'>
						<AiFillGithub className='navbar_icon_github' />
					</a>
					<div className='navbar_logo'>YeiikS</div>
				</div>
			</div>

			<div className={`navbar_container_menu ${menu ? 'isActive' : ''}`}>
				<ul className='navbar_menu_ul '>
					<li className='navbar_menu_li'>
						<a href='#AboutMe'>Sobre mí</a>
					</li>
					<li className='navbar_menu_li'>
						<a href='#Skills'>Skills</a>
					</li>
					<li className='navbar_menu_li'>
						<a href='#Experiencie'>Experiencia</a>
					</li>
					<li className='navbar_menu_li'>
						<a href='#Projects'>Proyectos</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
