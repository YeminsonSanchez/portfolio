const data = [
  {
    id: 1,
    title: 'Easy Peasy App',
    description: 'Plataforma de cursos para estudio de area TI',
    image:
      'https://res.cloudinary.com/daxltixrz/image/upload/v1669861269/WhatsApp_Image_2022-11-29_at_8.38.43_PM_3_zgptqd.jpg',
    link: 'https://easy-peasy-app.netlify.app/',
    tecnologies: [
      'React',
      'Express',
      'NodeJS',
      'PostgreSQL',
      'TailwindCSS',
      'ReduxToolkit',
      'NodeJS',
    ],
    github: 'https://github.com/YeminsonSanchez/EasyPeasyApp',
  },
  {
    id: 2,
    title: 'Heroes App',
    description: 'Busca a tu heroe favorito de marvel o dc',
    image:
      'https://res.cloudinary.com/daxltixrz/image/upload/v1669861269/WhatsApp_Image_2022-11-29_at_8.38.43_PM_2_y9f0p1.jpg',
    link: '',
    tecnologies: ['React', 'CSS', 'QueryString', 'NodeJS'],
    github: 'https://github.com/YeminsonSanchez/HeroesApp',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Mi portfolio personal',
    image: 'https://i.imgur.com/6YqJmZb.png',
    link: '',
    tecnologies: ['React', 'CSS', 'NodeJS'],
    github: 'https://github.com/YeminsonSanchez/portfolio',
  },
  {
    id: 4,
    title: 'Gifts App',
    description: 'Busca tus gifs favoritos',
    image:
      'https://res.cloudinary.com/daxltixrz/image/upload/v1669861269/WhatsApp_Image_2022-11-29_at_8.38.43_PM_4_nj2ycy.jpg',
    link: '',
    tecnologies: ['React', 'JWT', 'CSS', 'Jest', 'NodeJS'],
    github: 'https://github.com/YeminsonSanchez/buscador-gifs-app',
  },
  {
    id: 5,
    title: 'Todo App',
    description: 'Aplicacion para guardar tareas',
    image:
      'https://res.cloudinary.com/daxltixrz/image/upload/v1669861268/WhatsApp_Image_2022-11-29_at_8.38.43_PM_6_pww1cj.jpg',
    link: '',
    tecnologies: ['React', 'Firebase', 'MaterialUI', 'CSS', 'NodeJS'],
    github: 'https://github.com/YeminsonSanchez/journalApp',
  },
  {
    id: 6,
    title: 'Socket Api',
    description:
      'Api para gestion de almacenaje orientada al retail que se actualiza en tiempo real',
    image: 'https://i.imgur.com/6YqJmZb.png',
    link: '',
    tecnologies: ['Express', 'PostgreSQL', 'NodeJS', 'SocketIO'],
    github: 'https://github.com/YeminsonSanchez/socketApi',
  },
  {
    id: 7,
    title: 'Dragon Market',
    description:
      'Aplicacion de tienda virtual de productos alimenticios con sistema de pago',
    image: 'https://i.imgur.com/6YqJmZb.png',
    link: '',
    tecnologies: ['React', 'CSS', 'Express', 'NodeJS', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/YeminsonSanchez/ecommerce_back_express',
  },
  {
    id: 8,
    title: 'GitHub Profile',
    description: 'Busca un perfil de github y mira sus repositorios',
    image:
      'https://res.cloudinary.com/daxltixrz/image/upload/v1669861269/WhatsApp_Image_2022-11-29_at_8.38.43_PM_5_d75qyy.jpg',
    link: 'https://yeminsonsanchez.github.io/Obtener_informaci-n_y_repositorios_Github_de_usuarios/',
    tecnologies: ['JavaScript', 'CSS', 'HTML'],
    github:
      'https://github.com/YeminsonSanchez/Obtener_informaci-n_y_repositorios_Github_de_usuarios',
  },
  {
    id: 9,
    title: 'Skate Park',
    description: 'Gestion de campeonato de skates',
    image: 'https://i.imgur.com/6YqJmZb.png',
    link: '',
    tecnologies: [
      'NodeJS',
      'CSS',
      'Express',
      'PostgreSQL',
      'Express-Handlebars',
      'JWT',
    ],
    github: 'https://github.com/YeminsonSanchez/skate_park',
  },
  {
    id: 10,
    title: 'Suricata App',
    description: 'Frontend de aplicacion para compras de alimentos',
    image:
      'https://res.cloudinary.com/daxltixrz/image/upload/v1669861269/WhatsApp_Image_2022-11-29_at_8.38.44_PM_ldkqhd.jpg',
    link: 'https://yeminsonsanchez.github.io/Suricata/',
    tecnologies: ['JavaScript', 'CSS', 'HTML', 'Bootstrap'],
    github: 'https://github.com/YeminsonSanchez/Suricata',
  },
  {
    id: 11,
    title: 'Cuppon',
    description: 'Web para adquirir cupones de descuento',
    image: 'https://i.imgur.com/6YqJmZb.pngg',
    link: 'https://yeminsonsanchez.github.io/Cuppon/',
    tecnologies: ['JavaScript', 'CSS', 'HTML', 'Bootstrap'],
    github: 'https://github.com/YeminsonSanchez/Cuppon',
  },
  {
    id: 12,
    title: 'Meet And Cofee',
    description: 'Web de blog de cafe',
    image:
      'https://res.cloudinary.com/daxltixrz/image/upload/v1669861269/WhatsApp_Image_2022-11-29_at_8.38.44_PM_2_mzrmj4.jpg',
    link: 'https://yeminsonsanchez.github.io/Meet_-_Coffee/',
    tecnologies: ['JavaScript', 'CSS', 'HTML', 'Bootstrap'],
    github: 'https://github.com/YeminsonSanchez/Meet_-_Coffee',
  },
  {
    id: 14,
    title: 'Viajes Chile',
    description: 'Web de blog de viajes',
    image:
      'https://res.cloudinary.com/daxltixrz/image/upload/v1669861270/WhatsApp_Image_2022-11-29_at_8.38.44_PM_3_yuildj.jpg',
    link: 'https://yeminsonsanchez.github.io/viajesChile/',
    tecnologies: ['JavaScript', 'CSS', 'HTML', 'Bootstrap'],
    github: 'https://github.com/YeminsonSanchez/viajesChile',
  },
  {
    id: 15,
    title: 'Ricomida',
    description: 'Web blog sobre platos de comida',
    image:
      'https://res.cloudinary.com/daxltixrz/image/upload/v1669861269/WhatsApp_Image_2022-11-29_at_8.38.42_PM_mrbods.jpg',
    link: 'https://yeminsonsanchez.github.io/Ricomida/',
    tecnologies: ['JavaScript', 'CSS', 'HTML', 'Bootstrap'],
    github: 'https://github.com/YeminsonSanchez/Ricomida',
  },
]

export default data
