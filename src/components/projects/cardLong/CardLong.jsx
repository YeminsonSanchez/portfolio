import 'swiper/css'
import styles from './cardLong.module.css'

export const CardLong = ({ image, title, description, tags, link }) => {
	// console.log('isDarkMode', isDarkMode)
	return (
		<div className={styles.card}>
			<div className={styles.container_image}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.container_description}>
				<div>
					<h2>
						<a href={link} target='_blank' rel='noreferrer'>
							{title}
						</a>
					</h2>
					<p>{description}</p>
				</div>

				<div className={styles.container_tags}>
					{tags.map((tag, index) => (
						<p key={index}>{tag}</p>
					))}
				</div>
			</div>
		</div>
	)
}
