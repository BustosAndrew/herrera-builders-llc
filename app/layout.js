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
				<div className='navbar flex-wrap sm:flex-nowrap justify-between'>
					<div className='sm:flex-1'>
						<NavLink
							href='/'
							className='btn btn-lg btn-ghost sm:h-[200px] h-[100px]'
						>
							<img src='logo.svg' className='h-full' />
						</NavLink>
					</div>
					<div className='flex-none sm:self-end'>
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
						<img src='logo.svg' className='w-1/2 sm:w-1/5' />
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
