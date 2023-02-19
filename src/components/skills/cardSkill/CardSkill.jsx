import { dataSkills } from '../../../data/dataSkills'
import './cardskill.css'
export const CardSkill = ({ wordFilter }) => {
	return dataSkills
		.filter((skill) => skill.group === wordFilter)
		.map((skill) => (
			<div key={skill.id} className='card'>
				<div className='card_container_image'>
					<img className='card_image' src={skill.image} alt={skill.title} />
				</div>
				<h4 className='card_title'>{skill.title}</h4>
			</div>
		))
}
