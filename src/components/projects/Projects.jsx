import { CardProject } from './CardProject'
import './projects.css'
import data from './../../data/data'

export const Projects = () => {
	return (
		<section id='Projects'>
			{data.map(({ id, image, title, description, link, github }) => (
				<CardProject
					key={id}
					image={image}
					title={title}
					description={description}
					url_page={link}
					url_github={github}
				/>
			))}
		</section>
	)
}
