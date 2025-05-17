import React from "react";
import ProjectSlider from "./ProjectsSlider";

const Projects = () => {
	const title = "My projects";

	return (
		<section
			id='projects'
			// className='py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40'
		>
			<div className='container sm:px-6 py-4 bg-[#111111]/50 min-h-screen shadow-glowsubtle rounded-2xl'>
				<h2 className='inline-block text-xl font-light md:text-4xl tracking-tight leading-tight'>
					{title.split("").map((char, i) => (
						<span
							key={i}
							className='animate-glowLetter inline-block'
							style={{
								animationDelay: `${i * 150}ms`,
								animationFillMode: "both",
							}}
						>
							{char === " " ? "\u00A0" : char}
						</span>
					))}
				</h2>
				<ProjectSlider />
			</div>
		</section>
	);
};

export default Projects;
