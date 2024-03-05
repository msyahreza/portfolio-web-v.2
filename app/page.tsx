/** @format */

"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./page/MainPage";

export default function Home() {
	return (
		<>
			<div className="my-32">
				<Navbar />
			</div>
			<MainPage />
		</>
	);
}
