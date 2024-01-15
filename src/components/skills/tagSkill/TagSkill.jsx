import styles from './tagSkill.module.css'
export const TagSkill = ({ skill }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card_container_image}>
				<img
					className={styles.card_image}
					src={skill.image}
					alt={skill.title}
				/>
			</div>
			<h4 className={styles.card_title}>{skill.title}</h4>
		</div>
	)
}
