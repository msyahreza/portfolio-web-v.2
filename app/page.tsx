/** @format */

"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./page/MainPage";
import SecondPage from "./page/SecondPage";

export default function Home() {
	return (
		<>
			<Navbar />
			<MainPage />
			<SecondPage />
		</>
	);
}
