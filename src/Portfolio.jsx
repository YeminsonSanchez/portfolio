import { AboutMe } from './components/aboutMe/AboutMe'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'
import { Main } from './page/main/Main'

const Portfolio = () => {
	return (
		<>
			<Navbar />
			<Main />
			<AboutMe />
			<Skills />
			<Projects />
		</>
	)
}

export default Portfolio
