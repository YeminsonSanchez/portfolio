import { useState } from 'react'

export const CardProject = ({
	image,
	title,
	description,
	url_page,
	url_github,
}) => {
	const [isActive, setIsActive] = useState(false)
	return (
		<div className='container_card_project'>
			<img className='img_card_project' src={image} alt={title} />
			<div
				className='body_card_project'
				onMouseEnter={() => setIsActive(true)}
				onMouseLeave={() => setIsActive(false)}>
				<svg
					className={
						isActive ? 'svg_card_project isActive' : 'svg_card_project'
					}
					xmlns='http://www.w3.org/2000/svg'
					width='317'
					height='158'
					viewBox='0 0 317 158'
					fill='none'>
					<path
						d='M0 158L350 158L350 21.5572C350 21.5572 301.875 71.7739 189.34 21.5572C76.8055 -28.6594 -2.33252e-05 24.5953 -2.33252e-05 24.5953L0 158Z'
						fill='#06B6D4'
						fillOpacity='0.9'
					/>
				</svg>
				<h2
					className={
						isActive ? 'title_card_project isActive' : 'title_card_project'
					}>
					{title}
				</h2>
				<p
					className={
						isActive
							? 'description_card_project isActive'
							: 'description_card_project'
					}>
					{description}
				</p>
				<div
					className={
						isActive
							? 'container_buttons_card_project isActive'
							: 'container_buttons_card_project'
					}>
					<button className='button_card_project'>
						<a href={url_page} target='_blank' rel='noreferrer'>
							Visitar
						</a>
					</button>
					<button className='button_card_project'>
						<a href={url_github} target='_blank' rel='noreferrer'>
							Codigo
						</a>
					</button>
				</div>
			</div>
		</div>
	)
}
