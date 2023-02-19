import { AboutMe } from './components/aboutMe/AboutMe'
import { Navbar } from './components/navbar/Navbar'
import { Proyectos } from './components/proyectos/Proyectos'
import { Skills } from './components/skills/Skills'
import { WaveSvg } from './components/waveSvg/WaveSvg'
import { Main } from './page/main/Main'

const Portfolio = () => {
	return (
		<>
			<Navbar />
			<Main />
			<WaveSvg />
			<AboutMe />
			<Skills/>
			<Proyectos/>
		</>
	)
}

export default Portfolio
