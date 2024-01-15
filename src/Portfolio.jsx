import { AboutMe } from './components/aboutMe/AboutMe'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'
import { DarkModeProvider } from './context'
import { Main } from './page/main/Main'

const Portfolio = () => {
	return (
		<DarkModeProvider>
			<Navbar />
			<Main />
			<AboutMe />
			<Skills />
			<Projects />
		</DarkModeProvider>
	)
}

export default Portfolio
