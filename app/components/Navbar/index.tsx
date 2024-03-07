/** @format */

"use client"; // Menandai komponen sebagai Client Component

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
		<div className="w-full mb-32 md:mb-32 sm:mb-32">
			<nav
				className={`md:mx-40 text-secondary-color border border-black  md:mx-40 sm:py-30 text-secondary-color fixed w-9/12 top-0 left-0 sm:left-5 ${
					scrolling ? "bg-black" : ""
				}`}
			>
				<div className="container flex flex-wrap justify-between">
					<div className="flex md:order-2">
						<button
							onClick={toggleMobileMenu}
							className="inline-flex items-center p-2 text-sm text-secondary-color rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  navbar-sticky-button mbl-btn"
							aria-controls="navbar-sticky"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
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
							</svg>
						</button>
					</div>
					<div
						className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
							mobileMenuOpen ? "block" : "hidden"
						}`}
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
							<li>
								<a
									href="Partners.html"
									className="block py-2 pl-3 pr-4 text-xl font-bold rounded hover:bg-red text-secondary-color md:hover:bg-transparent md:hover:text-white md:p-0 text-amber-300"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="Partners.html"
									className="block py-2 pl-3 pr-4 text-xl font-bold rounded hover:bg-red text-secondary-color md:hover:bg-transparent md:hover:text-white md:p-0 text-amber-300"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="Partners.html"
									className="block py-2 pl-3 pr-4 text-xl font-bold rounded hover:bg-red text-secondary-color md:hover:bg-transparent md:hover:text-white md:p-0 text-amber-300"
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="Partners.html"
									className="block py-2 pl-3 pr-4 text-xl font-bold rounded hover:bg-red text-secondary-color md:hover:bg-transparent md:hover:text-white md:p-0 text-amber-300"
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
