import styles from './card.module.css'
import data from './../../data/data'

const {card, imgcard, descriptioncard, cardBody, projects, buttonCard} = styles
export const Card = () => {
  return (
    <>
      {/* <div className={projects}>
        <div className={card}>
          <div className={cardBody}>
            <h4>card 1</h4>
            <div className={imgcard}>
              <img src='./../public/pexels-photo-7915524.webp' alt='' />
            </div>
            <div className={descriptioncard}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quibusdam.
              </p>
            </div>
            <div className={buttonCard}>
              <button>Visitar</button>
              <button>
                <i className='fa-brands fa-github fa-lg'></i>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {data.map((project) => (
        <div className={projects} key={project.id}>
          <div className={card}>
            <div className={cardBody}>
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
                  <i className='fa-brands fa-github fa-lg'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
