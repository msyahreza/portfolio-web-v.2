/** @format */

"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./page/MainPage";
import SecondPage from "./page/SecondPage";

export default function Home() {
	return (
		<div className="border-x-2 border-black mx-8">
			{/* <Navbar /> */}
			<div>
				<MainPage />
			</div>
			<SecondPage />
		</div>
	);
}
