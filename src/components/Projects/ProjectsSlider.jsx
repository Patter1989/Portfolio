import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./sliderStyles.css";
import Modal from "../Modal/Modal";

const rawProjects = [
	{ img: "/assets/p1.png" },
	{ img: "/assets/p2.png" },
	{ img: "/assets/p3.png" },
	{ img: "/assets/p4.png" },
	{ img: "/assets/p5.png" },
	{ img: "/assets/p6.png" },
	{ img: "/assets/p7.png" },
	{ img: "/assets/p8.png" },
	{ img: "/assets/p9.png" },
	{ img: "/assets/p10.png" },
];

const projects = Array(2).fill(rawProjects).flat(); 

const ProjectsSlider = () => {
	const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.3 }
		);

		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className={`projects-slider-wrapper ${isVisible ? "visible" : ""}`}
		>
			<Swiper
				modules={[Autoplay, Navigation]}
				slidesPerView={"auto"}
				spaceBetween={30}
				loop={true}
				centeredSlides={true}
				grabCursor={true}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				speed={6000}
				freeMode={true}
				// freeModeMomentum={false}
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
				}}
				className='projects-swiper'
			>
				{projects.map((project, index) => (
					<SwiperSlide
						key={uuidv4()}
						style={{ "--slide-index": index }}
						onClick={() => setSelectedProject(project)}
					>
						<img
							src={project.img}
							alt='Project'
							className='project-img'
						/>
					</SwiperSlide>
				))}
			</Swiper>
			{selectedProject && (
				<Modal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</section>
	);
};

export default ProjectsSlider;
