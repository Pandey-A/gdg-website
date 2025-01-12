import Image from "next/image";
import Link from "next/link";
import ScrollButton from "./scrollButton";

import { Outfit, Space_Grotesk } from "next/font/google";

const outfit = Outfit({ subsets: ['latin'], weight: ['700'] })
const space = Space_Grotesk({ subsets: ['latin'], weight: ['300'] })

const Footer = () => {
	return (
		<footer style={{ backgroundImage: 'url("footer/footer_bg.svg")', backgroundRepeat: 'no-repeat' }}
			className='py-5 px-8 md:px-12 lg:px-24 bg-cover md:bg-contain'>
			<ScrollButton />
			<div className="flex flex-wrap justify-center md:justify-end md:gap-24 lg:gap-48">
				<div className='basis-1/2 md:basis-0'>
					<p style={outfit.style} className="text-xl text-white">Quicklinks</p>
					<div style={space.style} className="flex flex-col text-base mt-2">
						<a className="my-1" href="#about">About</a>
						<a className="my-1" href="#tracks">Themes</a>
						<a className="my-1" href="#timeline">Timeline</a>
						<a className="my-1" href="#organizers">Team</a>
						<a className="my-1" href="#sponsors">Sponsors</a>
						<a className="my-1" href="#faqs">FAQs</a>
						<a className="my-1" href="#contact">Contact Us</a>
					</div>
				</div>
				<div className='basis-1/2 md:basis-0'>
					<p style={outfit.style} className='text-xl text-white'>Join Us</p>
					<div style={space.style} className="flex flex-col text-base mt-2">
						<a href="https://discord.com/invite/SBKyNqkaCp" className='flex gap-2 my-1'>
							<svg className='my-auto' width="24" height="auto" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.5951 2.99417C30.2204 0.450584 24.8817 0.0194154 24.6532 0.00390518C24.2988 -0.024012 23.961 0.162104 23.8153 0.469195C23.8021 0.487807 23.6861 0.739063 23.557 1.12991C25.7891 1.48353 28.5313 2.19387 31.0119 3.63627C31.4093 3.86581 31.5318 4.35591 31.2868 4.72814C31.1245 4.9732 30.8496 5.10658 30.5648 5.10658C30.4124 5.10658 30.2568 5.06625 30.1177 4.9856C25.8521 2.50716 20.5267 2.38309 19.5 2.38309C18.4733 2.38309 13.1446 2.50716 8.8823 4.9856C8.48489 5.21825 7.96162 5.10348 7.71654 4.73125C7.46816 4.35591 7.59069 3.86891 7.98811 3.63627C10.4687 2.19697 13.2109 1.48353 15.443 1.13301C15.3139 0.739064 15.1979 0.490909 15.188 0.469195C15.039 0.162104 14.7045 -0.0302155 14.3468 0.00390518C14.1183 0.0194154 8.77964 0.450583 5.35853 3.02829C3.57346 4.57615 0 13.6214 0 21.4413C0 21.5809 0.0397418 21.7143 0.112602 21.8353C2.5766 25.8926 9.3029 26.9535 10.8363 27C10.8429 27 10.8528 27 10.8628 27C11.1343 27 11.3894 26.879 11.5483 26.6743L13.0983 24.6767C8.91542 23.6654 6.7793 21.947 6.65676 21.8446C6.30571 21.5561 6.27259 21.0536 6.5839 20.7248C6.8919 20.396 7.42841 20.365 7.77947 20.6535C7.82914 20.6969 11.7636 23.8236 19.5 23.8236C27.2497 23.8236 31.1841 20.6845 31.2238 20.6535C31.5749 20.3681 32.1081 20.396 32.4194 20.7279C32.7274 21.0567 32.6943 21.5561 32.3432 21.8446C32.2207 21.947 30.0846 23.6654 25.9017 24.6767L27.4517 26.6743C27.6106 26.879 27.8657 27 28.1372 27C28.1472 27 28.1571 27 28.1637 27C29.6971 26.9535 36.4234 25.8926 38.8874 21.8353C38.9603 21.7143 39 21.5809 39 21.4413C39 13.6214 35.4265 4.57615 33.5951 2.99417ZM13.9891 18.265C12.3498 18.265 11.0217 16.8443 11.0217 15.0886C11.0217 13.3329 12.3498 11.9122 13.9891 11.9122C15.6285 11.9122 16.9565 13.3329 16.9565 15.0886C16.9565 16.8443 15.6285 18.265 13.9891 18.265ZM25.0109 18.265C23.3715 18.265 22.0435 16.8443 22.0435 15.0886C22.0435 13.3329 23.3715 11.9122 25.0109 11.9122C26.6502 11.9122 27.9783 13.3329 27.9783 15.0886C27.9783 16.8443 26.6502 18.265 25.0109 18.265Z" fill="white"/></svg>
							Discord
						</a>
					</div>
				</div>
				<div className='my-4 md:my-0'>
					<p style={outfit.style} className='text-xl text-white'>Follow Us</p>
					<p style={space.style} className="text-base my-2">Connect. Learn. Grow</p>
					<div className="flex justify-center gap-2">
						<a href="https://www.instagram.com/gdg_rbu/" target="_blank" rel="noopener noreferrer">
							<Image style={{ height: 40, width: 'auto' }} src='footer/insta.svg' width={40} height={40} alt='Instagram' />
						</a>
						<a href="https://x.com/gdsc_rcoem" target="_blank" rel="noopener noreferrer">
							<Image style={{ height: 40, width: 'auto' }} src='footer/twitter.svg' width={40} height={40} alt='Twitter' />
						</a>
						<a href="https://www.linkedin.com/company/gdsc-rcoem/" target="_blank" rel="noopener noreferrer">
							<Image style={{ height: 40, width: 'auto' }} src='footer/linkdin.svg' width={40} height={40} alt='LinkedIn' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;