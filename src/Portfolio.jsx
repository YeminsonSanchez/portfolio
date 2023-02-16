import { AboutMe } from './components/aboutMe/AboutMe'
import { Navbar } from './components/navbar/Navbar'
import { WaveSvg } from './components/waveSvg/WaveSvg'
import { Main } from './page/main/Main'

const Portfolio = () => {
	return (
		<>
			<Navbar />
			<Main />
			<WaveSvg />
			<AboutMe />
		</>
	)
}

export default Portfolio
