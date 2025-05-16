import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useRef } from "react";

const Layout = () => {
	const videoRef = useRef();

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.5;
		}
	}, []);

	return (
		<div className='relative w-full h-screen overflow-hidden'>
			{/* 🎞️ Відео на фоні */}
			<video
				ref={videoRef}
				autoPlay
				loop
				muted
				playsInline
				className='absolute inset-0 w-full h-full object-cover z-0'
			>
				<source
					src='/bg.mp4'
					type='video/mp4'
				/>
				Ваш браузер не підтримує відео.
			</video>

			{/* 🖤 Темна прозора накладка */}
			<div className='absolute inset-0 bg-[#111111]/95 z-10' />

			{/* 📌 Фіксований верх (Navbar + все фонове) */}
			<div className='absolute inset-0 z-20 pointer-events-none'>
				<Navbar />
			</div>

			{/* 🧾 Скролюваний контент (Outlet) */}
			<div className='relative z-30 h-full overflow-y-auto'>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
