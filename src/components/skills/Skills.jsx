import { dataSkills } from '../../data'
import { CardSkill } from './cardSkill/CardSkill'
import { CardSkillMobile } from './cardSkillMobile/CardSkillMobile'
import './skills.css'

export const Skills = () => {
	return (
		<section id='Skills' className='container_section'>
			<h2 className='skills_title'>Tecnologías.</h2>
			<div className='container_main_skills_desktop'>
				{dataSkills.map((skill, index) => (
					<div key={skill.id} className={`grid_${index + 1}`}>
						<CardSkill technology={skill} position={index} />
					</div>
				))}
			</div>
			<div className='container_main_skills_mobile'>
				<CardSkillMobile  />
			</div>
		</section>
	)
}
