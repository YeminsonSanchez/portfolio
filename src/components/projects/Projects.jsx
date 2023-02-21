import './projects.css'

export const Projects = () => {
	return (
		<section id='Projects'>
			<div className='container_projects'>
				{/* <img
					src='https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					alt=''
				/> */}
				<svg
					className='svg_projects'
					xmlns='http://www.w3.org/2000/svg'
					width='317'
					height='158'
					viewBox='0 0 317 158'
					fill='none'>
					<path
						d='M0 158L350 158L350 21.5572C350 21.5572 301.875 71.7739 189.34 21.5572C76.8055 -28.6594 -2.33252e-05 24.5953 -2.33252e-05 24.5953L0 158Z'
						fill='#06B6D4'
						fillOpacity='0.8'
					/>
				</svg>
				<h2 className='hola'>Mina Boutique</h2>
			</div>
			{/* <div className='container_projects'></div>
			<div className='container_projects'></div>
			<div className='container_projects'></div> */}
		</section>
	)
}
