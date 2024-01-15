import { useContext } from 'react'
import { DarkModeContext } from '../../../context'
import { TagSkill } from '../tagSkill/TagSkill'
import styles from './cardSkill.module.css'

const indexPosition = [
	'column',
	'row',
	'row',
	'column',
	'column-reverse',
	'row-reverse',
	'column-reverse',
]

export const CardSkill = ({ technology, position }) => {
	const { group, technologies } = technology
	const { isDarkMode } = useContext(DarkModeContext)

	return (
		<div
			key={technology.id}
			className={styles.card_container}
			style={{
				flexDirection: indexPosition[position]
					? indexPosition[position]
					: 'column',
				backgroundColor: isDarkMode ? '#dad7d7' : '#f5f5f5',
				boxShadow: isDarkMode
					? '1px 1px 8px 0px rgb(129, 173, 190)'
					: '1px 1px 10px 0px rgba(0, 0, 0, 0.301)',
				height: position ? '100%' : '30rem',
			}}>
			<h3 className={styles.title}>{group} </h3>
			{technologies.map((skill, index) => (
				<TagSkill key={index} skill={skill} />
			))}
		</div>
	)
}
