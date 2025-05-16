import React from "react";
import ProjectSlider from "./ProjectsSlider";

const Projects = () => {
	const title = "My projects";

	return (
		<section
			id='projects'
			className='py-16 px-4 bg-[#111111] group hover-glow overflow-hidden'
		>
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
		</section>
	);
};

export default Projects;
