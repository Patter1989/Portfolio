import ProjectCard from "../components/Projects/ProjectCard"; // Приклад

export default function Projects() {
	return (
		<section className='py-12 px-4'>
			<h2 className='text-3xl font-bold text-center mb-8'>Усі проєкти</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<ProjectCard title='Проєкт 1' />
				<ProjectCard title='Проєкт 2' />
				<ProjectCard title='Проєкт 3' />
				{/* ... */}
			</div>
		</section>
	);
}
