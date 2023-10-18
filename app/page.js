import Image from "next/image"
import { Slider } from "./Slider"
import { Web3Script } from "./web3script.js"

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center'>
			{/* <Slider /> */}
			<div className='hero min-h-fit py-10'>
				<div className='hero-content text-center'>
					<div className='max-w-3xl'>
						<h1 className='text-6xl font-bold'>OUR WORK</h1>
						<p className='text-lg'>
							At Herrera Builders LLC, we believe that construction is more than
							a business; it&apos;s a calling. It&apos;s about building the
							future, one project at a time. From residential construction to
							concrete work, framing expertise, structural repairs, and more,
							each project represents a labor of love, demonstrating our passion
							for turning blueprints into reality. We invite you to join us in
							this journey of creating lasting projects and fulfilling dreams.
						</p>
					</div>
				</div>
			</div>
			<div
				className='hero h-96 max-w-full'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a href='#contact' className='link link-accent text-5xl font-bold'>
							Concrete
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96 max-w-full'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a href='#contact' className='link link-accent text-5xl font-bold'>
							Framing
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96 max-w-full'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a href='#contact' className='link link-accent text-5xl font-bold'>
							Fencing
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96 max-w-full'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a href='#contact' className='link link-accent text-5xl font-bold'>
							Demo
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96 max-w-full'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a href='#contact' className='link link-accent text-5xl font-bold'>
							Bathrooms
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96 max-w-full'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a href='#contact' className='link link-accent text-5xl font-bold'>
							Home Additions
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96 max-w-full'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a href='#contact' className='link link-accent text-5xl font-bold'>
							Interior & Exterior Painting
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96 max-w-full'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a href='#contact' className='link link-accent text-5xl font-bold'>
							Drywall
						</a>
					</div>
				</div>
			</div>
			<div className='hero min-h-screen' id='contact'>
				<div className='hero-content py-16 flex-col lg:flex-row-reverse lg:gap-10'>
					<div className='text-center lg:text-left'>
						<h1 className='text-5xl font-bold'>Contact Us</h1>
						<p className='py-6'>
							We&apos;re eager to hear from you and discuss how we can bring
							your construction project to life. Whether you have a question,
							need a quote, or want to explore partnership opportunities, our
							team is here to assist you.
						</p>
					</div>
					<Web3Script />
				</div>
			</div>
		</main>
	)
}
