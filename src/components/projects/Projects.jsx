import { CardProject } from './CardProject'
import './projects.css'
import data from './../../data/data'

export const Projects = () => {
	return (
		<section id='Projects'>
			<h2 className='projects_title'>Proyectos.</h2>
			<div className='main_container_project'>
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
			</div>
		</section>
	)
}
