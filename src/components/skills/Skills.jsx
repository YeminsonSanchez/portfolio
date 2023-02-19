import { CardSkill } from './cardSkill/CardSkill'
import './skills.css'

export const Skills = () => {
	return (
		<section id='Skills'>
			<h2 className='skills_title'>Skills.</h2>
			<div className='container_main_skills'>
				<div className='card_container_languaje'>
					<h3 className='title_container'>Lenguaje </h3>
					<CardSkill wordFilter='Languaje' />
				</div>
				<div className='card_container_frontend'>
					<h3 className='title_container'>Frontend </h3>
					<CardSkill wordFilter='Frontend' />
				</div>
				<div className='card_container_backend'>
					<h3 className='title_container'>Backend </h3>
					<CardSkill wordFilter='Backend' />
				</div>
				<div className='card_container_database'>
					<h3 className='title_container'>Bases de datos </h3>
					<CardSkill wordFilter='Database' />
				</div>
				<div className='card_container_devops'>
					<h3 className='title_container'>DevOps </h3>
					<CardSkill wordFilter='DevOps' />
				</div>
				<div className='card_container_cloud'>
					<h3 className='title_container'>Nube </h3>
					<CardSkill wordFilter='Cloud' />
				</div>
				<div className='card_container_test'>
					<h3 className='title_container'>Test </h3>
					<CardSkill wordFilter='Test' />
				</div>
				<div className='card_container_design'>
					<h3 className='title_container'>Design </h3>
					<CardSkill wordFilter='Design' />
				</div>
			</div>
		</section>
	)
}
