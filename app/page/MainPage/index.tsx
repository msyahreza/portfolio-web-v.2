/** @format */

import Image from "next/image";
import React from "react";

export default function MainPage() {
	return (
		<>
			<div className="mx-40 border border-black">
				<div className="grid grid-cols-2 gap-12">
					<div>
						<h1>Lorem Ipsum</h1>
						<h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="flex items-center justify-center">
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
			<footer className="mt-2 flex justify-center items-center">
				<Image
					src="/image/logo/wave.svg"
					alt="Wave Logo"
					width={1600}
					height={100}
					priority
				/>
			</footer>
		</>
	);
}
