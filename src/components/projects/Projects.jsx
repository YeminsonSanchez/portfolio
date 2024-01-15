// import { data } from './../../data'
// import { CardLong } from './cardLong/CardLong'
import './projects.css'

export const Projects = () => {
	return (
		<section id='Projects'>
			{/* <h2 className='projects_title'>Proyectos.</h2> */}
			<div className='main_container_project'>
				<h6 className='projects_title'>En Construcción.</h6>

				{/* {data.map(({ id, image, title, description, tags, link }) => (
					<CardLong
						key={id}
						image={image}
						title={title}
						description={description}
						tags={tags}
						link={link}
					/>
				))} */}
			</div>
		</section>
	)
}
