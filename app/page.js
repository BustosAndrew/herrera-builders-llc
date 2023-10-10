import Image from "next/image"
import { Slider } from "./Slider"

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center'>
			<Slider />
			<div className='hero min-h-fit py-10'>
				<div className='hero-content text-center'>
					<div className='max-w-3xl'>
						<h1 className='text-6xl font-bold'>OUR WORK</h1>
						<p className='text-lg'>
							We know how difficult it is to find reliable professionals that
							have the knowledge to work in a number of different trades. We are
							here to put your mind at ease, with the knowledge that is only
							possible through 20+ years of experience in the construction
							industry. Our secret is no secret, we value our clients and
							provide affordable quality service with meticulous attention to
							both detail and schedule requirements. We specialize in kitchen
							and bathroom remodels, custom drywall, and new construction. While
							most of our work is done in a residential setting we also complete
							work in the commercial industry. We understand that a construction
							project, no matter the size, when not managed correctly, has the
							potential to cost far greater than what was expected at the onset
							of planning. This is why we are here, to assist you every step of
							the way, we take your vison and make it a reality.
						</p>
					</div>
				</div>
			</div>
			<div
				className='hero h-96'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a
							href='#contact'
							className='hover:underline text-5xl font-bold text-accent'
						>
							Framing
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a
							href='#contact'
							className='hover:underline text-5xl font-bold text-accent'
						>
							Bathrooms
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a
							href='#contact'
							className='hover:underline text-5xl font-bold text-accent'
						>
							Interior & Exterior Painting
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a
							href='#contact'
							className='hover:underline text-5xl font-bold text-accent'
						>
							Concrete
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a
							href='#contact'
							className='hover:underline text-5xl font-bold text-accent'
						>
							Drywall
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a
							href='#contact'
							className='hover:underline text-5xl font-bold text-accent'
						>
							Home Additions
						</a>
					</div>
				</div>
			</div>
			<div
				className='hero h-96'
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<a
							href='#contact'
							className='hover:underline text-5xl font-bold text-accent'
						>
							Demolition
						</a>
					</div>
				</div>
			</div>
			<div className='hero min-h-screen max-w-3xl' id='contact'>
				<div className='hero-content py-16 flex-col lg:flex-row-reverse lg:gap-10'>
					<div className='text-center lg:text-left'>
						<h1 className='text-5xl font-bold'>Contact Us</h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
					<div
						id='contact'
						className='card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100'
					>
						<form className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name *</span>
								</label>
								<input
									type='text'
									placeholder='Jane Doe'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Address</span>
								</label>
								<input
									type='text'
									placeholder='123 Main St.'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email *</span>
								</label>
								<input type='email' className='input input-bordered' required />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Phone</span>
								</label>
								<input
									type='tel'
									placeholder='123-456-7890'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Your Message *</span>
								</label>
								<textarea
									className='textarea textarea-bordered'
									rows={5}
									required
								></textarea>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-accent'>Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	)
}
