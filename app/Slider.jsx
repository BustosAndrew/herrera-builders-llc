"use client"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination } from "swiper/modules"

export const Slider = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + "</span>"
		},
	}

	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={pagination}
				modules={[Autoplay, Pagination]}
			>
				<SwiperSlide>
					<img src='webpic3.webp' className='h-screen' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='webpic4.webp' className='h-screen' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='webpic6.jpg' className='h-screen' />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
