import styles from './card.module.css'
import data from './../../data/data'

const {card, imgcard, descriptioncard, cardBody, projects, buttonCard} = styles

export const Card = () => {

  return (
    <>
      {data.map((project) => (
        <div className={projects} key={project.id}>
          <div className={card}>
            <div className={`${cardBody}`}>
              <h4>{project.title}</h4>
              <div className={imgcard}>
                <img src={project.image} alt='' />
              </div>
              <div className={descriptioncard}>
                <p>{project.description}</p>
              </div>
              <div className={buttonCard}>
                <button>
                  <a href={project.link}>Visitar</a>
                </button>
                <button>
                  <a href={project.github}>
                    {' '}
                    <i className='fa-brands fa-github fa-lg'></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
