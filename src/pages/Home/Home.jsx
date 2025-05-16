import React from 'react'
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';

const Home = () => {
  return (
		<main className='text-center'>
			<Hero />
			<Projects />
			{/* <About />
			<Contact /> */}
		</main>
	);
}

export default Home
