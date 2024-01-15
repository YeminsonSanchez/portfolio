import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataSkills } from '../../../data'
import { CardSkill } from '../cardSkill/CardSkill'
import styles from './cardSkillMobile.module.css'

export const CardSkillMobile = () => {
	return (
		<Swiper
			spaceBetween={100}
			centeredSlides={true}
			autoplay={{
				delay: 3500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Autoplay, Pagination, Navigation]}>
			{dataSkills.map((skill) => (
				<SwiperSlide key={skill.id} className={styles.container_swiper}>
					<CardSkill technology={skill} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
