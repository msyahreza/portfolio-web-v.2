/** @format */

"use client"; // Menandai komponen sebagai Client Component

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 0) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		}

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<div className="w-full mb-32 lg:mb-32">
			<nav
				className={`xl:mx-40 text-secondary-color border border-black text-secondary-color fixed xl:w-9/12 top-0 left-0 xl:left-5 lg:px-5 lg:py-5 lg:backdrop-blur-md ${
					scrolling ? "backdrop-blur-md" : ""
				}`}
			>
				<div className="container flex flex-wrap justify-between backdrop-blur-md">
					<div className="flex xl:order-2">
						<button
							onClick={toggleMobileMenu}
							className="inline-flex items-center pl-2 pt-4 text-sm text-secondary-color rounded-lg xl:hidden xl:hover:bg-gray-100 focus:outline-none  navbar-sticky-button mbl-btn"
							aria-controls="navbar-sticky"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<Image
								src="/image/icon/r-navbar.svg"
								width={48}
								height={48}
								alt="res-navbar"
							/>
							{/* <svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							</svg> */}
						</button>
					</div>
					<div
						className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 backdrop-blur-xl ${
							mobileMenuOpen ? "block" : "hidden"
						}`}
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-2 mt-2 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium xl:border-0 dark:border-gray-700">
							<li>
								<a
									href="Partners.html"
									className="block py-4 pl-3 pr-4 text-4xl font-bold rounded text-secondary-color md:hover:bg-transparent xl:hover:text-white xl:p-0"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="Partners.html"
									className="block py-4 pl-3 pr-4 text-4xl font-bold rounded text-secondary-color md:hover:bg-transparent xl:hover:text-white xl:p-0 "
								>
									About
								</a>
							</li>
							<li>
								<a
									href="Partners.html"
									className="block py-4 pl-3 pr-4 text-4xl font-bold rounded text-secondary-color md:hover:bg-transparent xl:hover:text-white xl:p-0 "
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="Partners.html"
									className="block py-4 pl-3 pr-4 text-4xl font-bold rounded text-secondary-color md:hover:bg-transparent xl:hover:text-white xl:p-0 "
								>
									Certificate
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/* mobile menu */}
				{/* {mobileMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li>
                <a href="index.html" className="block text-sm px-2 py-4 text-amber-300 hover:bg-amber-300 hover:text-red font-semibold rounded-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="Partners.html" className="block text-sm px-2 py-4 text-amber-300 hover:bg-amber-300 hover:text-red font-semibold rounded-lg">
                  Partners
                </a>
              </li>
              <li>
                <a href="mascot.html" className="block text-sm px-2 py-4 text-amber-300 hover:bg-amber-300 hover:text-red font-semibold rounded-lg">
                  Mascot
                </a>
              </li>
              <li className="active">
                <a href="contact.html" className="block text-sm px-2 py-4 text-amber-300 hover:bg-amber-300 hover:text-red font-semibold rounded-lg">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )} */}
			</nav>
		</div>
	);
}
