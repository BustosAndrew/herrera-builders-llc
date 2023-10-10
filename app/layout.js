import "./globals.css"
import { Inter } from "next/font/google"
import NavLink from "next/link"

// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Herrera Builders LLC",
	description: "Providing reliable construction service since 1992.",
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body>
				<div className='navbar gap-8 sm:gap-0 flex-col sm:flex-row justify-center items-center'>
					<div className='sm:navbar-start'>
						<NavLink
							href='/'
							className='btn btn-lg btn-ghost md:h-[200px] h-[90px]'
						>
							<img src='logo.svg' className='h-full' />
						</NavLink>
					</div>
					<div className='sm:navbar-center flex flex-col text-center max-w-[270px]'>
						<p className='font-bold sm:text-2xl'>LICENSE #</p>
						<br />
						<p className='sm:text-base text-sm sm:w-full w-1/2'>
							We know how difficult it is to find reliable professionals that
							have the knowledge to work in a number of different trades.
						</p>
					</div>
					<div className='sm:navbar-end'>
						<NavLink
							className='btn btn-sm sm:btn-md btn-neutral normal-case'
							href='#contact'
						>
							Get In Touch
						</NavLink>
					</div>
				</div>
				{children}
				<footer className='footer footer-center p-10 border-t'>
					<aside>
						<img src='logo.svg' className='w-1/2' />
						<p className='font-bold'>
							Herrera Builders LLC <br />
							Providing reliable construction service since 1992
						</p>
						<p>Copyright © 2023 - All rights reserved</p>
					</aside>
				</footer>
			</body>
		</html>
	)
}
