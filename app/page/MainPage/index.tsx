/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainPage() {
	return (
		<>
			<div className="max-w-screens-sm lg:mx-5 xl:mx-44">
				<div className="border border-black py-32 lg:py-10">
					<div className="grid grid-cols-3 lg:flex lg:flex-col">
						<div className="col-span-2 lg:order-3 lg:text-center justify-center align-middle">
							<h1 className="font-semibold text-4xl lg:text-3xl text-secondary-color my-1.5">
								Lorem Ipsum
							</h1>
							<h2 className="font-extrabold text-5xl lg:text-6xl text-secondary-color mt-4">
								The standard Lorem Ipsum
							</h2>
							<h3 className="font-semibold lg:text-2xl text-secondary-color lg:my-7 my-1.5">
								Fresh graduate bachelor degree of informatics at Amikom
								Yogyakarta University. I was specialized at front-end web
								developer and front-end flutter developer. I am very interested
								in the IT world and always learn when I find new things related
								to it.
							</h3>
							<div className="flex mt-12 lg:justify-center lg:my-8">
								<Link href={"mailto: muhamadsyahr45@gmail.com"}>
									<Image
										src="/image/icon/email-logo.svg"
										width={152}
										height={66}
										alt="email-logo"
										className="mr-2 my-4"
									/>
								</Link>
								<Link
									href={"https://www.linkedin.com/in/m-syah-reza"}
									target="_blank"
								>
									<Image
										src="/image/icon/linkedin-logo.svg"
										width={66}
										height={66}
										alt="linkedin-logo"
										className="m-4"
									/>
								</Link>
								<Link
									href={"https://www.instagram.com/muhamadsyahreza"}
									target="_blank"
								>
									<Image
										src="/image/icon/instagram-logo.svg"
										width={66}
										height={66}
										alt="instagram-logo"
										className="m-4"
									/>
								</Link>
								<Link href={"https://github.com/msyahreza"} target="_blank">
									<Image
										src="/image/icon/githab-icon.svg"
										width={66}
										height={66}
										alt="githab-logo"
										className="m-4"
									/>
								</Link>
							</div>
							<div className="flex lg:justify-center lg:my-2">
								<Link
									href={
										"https://drive.google.com/file/d/1ZijSAl6YqjeNeOrFMHHgSj5lCyjcWrx1/view?usp=sharing"
									}
									target="_blank"
								>
									<Image
										src="/image/icon/cv-download.svg"
										width={240}
										height={44}
										alt="cv-download"
									/>
								</Link>
							</div>
						</div>
						<div className="flex justify-center lg:order-2 lg:my-8 col-span-1">
							<Image
								src="/image/logo/valorant-logo.svg"
								alt="Profile Image"
								width={264}
								height={552}
								priority
							/>
						</div>
					</div>
				</div>

				{/* <div className="flex justify-center mt-10">
					<div className="grid grid-cols-4 border border-black place-items-center">
						<div className="col-span-1">
							<Image
								src="/image/icon/email-logo.svg"
								width={152}
								height={66}
								alt="email-logo"
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/image/icon/linkedin-logo.svg"
								width={66}
								height={66}
								alt="email-logo"
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/image/icon/instagram-logo.svg"
								width={66}
								height={66}
								alt="email-logo"
							/>
						</div>
						<div className="col-span-1">
							<Image
								src="/image/icon/githab-icon.svg"
								width={66}
								height={66}
								alt="email-logo"
							/>
						</div>
					</div>
				</div> */}
			</div>
			<div className="flex flex-col justify-end lg:float-none lg:left-none w-full">
				<picture>
					{/* Gambar untuk ukuran layar kecil */}
					<source
						srcSet="/image/icon/footer-pg1-mobile.svg"
						media="(max-width: 1279px)"
					/>
					{/* Gambar untuk ukuran layar besar (lg) */}
					<source
						srcSet="/image/icon/footer-pg1.svg"
						media="(min-width: 1280px)"
					/>
					{/* Fallback jika browser tidak mendukung tag <source> */}
					<Image
						src="/image/icon/footer-pg1.svg"
						alt="Wave Logo"
						className="w-full"
						width={1920}
						height={341}
						priority
					/>
				</picture>
			</div>
			{/* <div>
				<Image
					src="/image/icon/footer-pg1.svg"
					alt="Wave Logo"
					width={1920}
					height={341}
				/>
			</div> */}
		</>
		// <div className="border-black sm:mx-5">
		// 	<div className="border border-black">
		// 		<div className="grid grid-cols-3">
		// 			<div className="col-span-2">
		// 				<h1 className="font-semibold text-secondary-color">Lorem Ipsum</h1>
		// 				<h2 className="font-extrabold text-secondary-color">
		// 					The standard Lorem Ipsum passage, used since the 1500s
		// 				</h2>
		// 				<h3 className="font-semibold text-secondary-color">
		// 					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		// 					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
		// 					enim ad minim veniam, quis nostrud exercitation ullamco laboris
		// 					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
		// 					reprehenderit in voluptate velit esse cillum dolore eu fugiat
		// 					nulla pariatur. Excepteur sint occaecat cupidatat non proident,
		// 					sunt in culpa qui officia deserunt mollit anim id est laborum.
		// 				</h3>
		// 			</div>
		// 			<div className="flex justify-center col-span-1">
		// 				<Image
		// 					src="/image/logo/valorant-logo.svg"
		// 					alt="Vercel Logo"
		// 					width={200}
		// 					height={200}
		// 					priority
		// 				/>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	{/* <footer className="mt-20 flex justify-center items-center">
		// 		<Image
		// 			src="/image/logo/wave.svg"
		// 			alt="Wave Logo"
		// 			className="w-full h-full"
		// 			width={1920}
		// 			height={100}
		// 			priority
		// 		/>
		// 	</footer> */}
		// 	<footer className="flex flex-col justify-end float-end bottom-0 left-0 w-full">
		// 		<Image
		// 			src="/image/logo/wave.svg"
		// 			alt="Wave Logo"
		// 			className="w-full"
		// 			width={1920}
		// 			height={10}
		// 			priority
		// 		/>
		// 	</footer>
		// </div>
	);
}
