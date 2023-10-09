"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const totalSlides = 3 // Replace with the total number of carousel slides

	useEffect(() => {
		const autoplayInterval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
		}, 3000) // Adjust the autoplay interval (in milliseconds) as needed

		return () => clearInterval(autoplayInterval)
	}, [])

	return (
		<div className='carousel'>
			<div className='carousel-item relative w-full'>
				{/* Map through your carousel slides */}
				{Array.from({ length: totalSlides }).map((_, index) => (
					<div
						key={index}
						className={`${currentSlide === index ? "active" : ""}`}
					>
						<Image
							src='/photo-1414694762283-acccc27bca85.jpg'
							width={1024}
							height={500}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
