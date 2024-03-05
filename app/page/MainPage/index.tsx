/** @format */

import Image from "next/image";
import React from "react";

export default function MainPage() {
	return (
		<div className="py-40">
			<div className="mx-40 border border-black">
				<div className="grid grid-cols-3">
					<div className="col-span-2">
						<h1 className="font-semibold text-secondary-color">Lorem Ipsum</h1>
						<h2 className="font-extrabold text-secondary-color">
							The standard Lorem Ipsum passage, used since the 1500s
						</h2>
						<h3 className="font-semibold text-secondary-color">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</h3>
					</div>
					<div className="flex justify-center col-span-1">
						<Image
							src="/image/logo/valorant-logo.svg"
							alt="Vercel Logo"
							width={200}
							height={200}
							priority
						/>
					</div>
				</div>
			</div>
			{/* <footer className="mt-20 flex justify-center items-center">
				<Image
					src="/image/logo/wave.svg"
					alt="Wave Logo"
					className="w-full h-full"
					width={1920}
					height={100}
					priority
				/>
			</footer> */}
			<footer className="flex flex-col justify-end float-end bottom-0 left-0 w-full">
				<Image
					src="/image/logo/wave.svg"
					alt="Wave Logo"
					className="w-full"
					width={1920}
					height={10}
					priority
				/>
			</footer>
		</div>
	);
}
