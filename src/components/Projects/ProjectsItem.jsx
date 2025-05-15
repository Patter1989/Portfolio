const ProjectItem = ({ img }) => {
	return (
		<div className='w-[10vw] h-[60vh] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:scale-150 hover:z-10 relative'>
			<img
				src={img}
				alt='Project'
				className='w-full h-full object-cover pointer-events-none'
			/>
		</div>
	);
};

export default ProjectItem;
