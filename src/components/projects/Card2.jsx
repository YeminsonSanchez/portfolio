import './card.css'

export const Card2 = ({ image, title, description }) => {
	return (
		<div className='card2-container'>
			<div className='card2'>
				<article className='body-card'>
					<div className='container-text-card'>
						<h2 className='title-card'>{title}</h2>
						<p className='body-text-card'>{description}</p>
					</div>
					<img className='img-card' src={image} alt={title} />
				</article>
				<div className='circle'></div>
				<div className='circle'></div>
			</div>
		</div>
	)
}
