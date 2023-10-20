"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "./globals.css"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

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
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={pagination}
				modules={[Autoplay, Pagination]}
			>
				<SwiperSlide>
					<img src='/bathroom.jpg' className='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='webpic4.webp' className='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='webpic6.jpg' className='' />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
