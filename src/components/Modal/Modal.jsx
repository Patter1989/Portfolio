import React, { useEffect } from "react";

const Modal = ({ project, onClose }) => {
	if (!project) return null;

	useEffect(() => {
		
		document.body.classList.add("overflow-hidden");

		
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	const handleInnerClick = (e) => e.stopPropagation();

	return (
		<div
			className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50'
			onClick={onClose}
		>
			<div
				className='relative w-full max-w-6xl mx-4 md:mx-8 lg:mx-auto bg-neutral-900 text-white rounded-3xl shadow-glowsubtle p-10 md:p-16 max-h-[90vh] overflow-y-auto transition-all duration-500'
				onClick={handleInnerClick}
			>
				<button
					className='absolute top-6 right-6 text-4xl font-light text-white/60 hover:text-white transition'
					onClick={onClose}
					aria-label='Close modal'
				>
					×
				</button>

				<div className='flex flex-col md:flex-row gap-10 items-center'>
					<div className='flex-1'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight'>
							{project.title || "Project name"}
						</h2>
						<p className='text-lg text-neutral-300 leading-relaxed'>
							{project.description ||
								"Project theme: which skills used."}
						</p>
					</div>

					<div className='flex-1 w-full max-w-md max-h-[600px] overflow-y-hidden rounded-2xl  scroll-smooth animate-glow-shadow'>
						{/* <div className='glow-ring-wrapper'> */}
						<img
							src={project.img}
							alt='Project'
							className=' rounded-2xl shadow-lg w-full h-auto object-contain'

							// className='relative z-10 rounded-2xl shadow-lg w-full h-auto object-contain'
						/>
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
