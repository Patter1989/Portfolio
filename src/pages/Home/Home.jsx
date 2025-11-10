import React from 'react'
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';

const Home = () => {
  return (
		<main className='text-center pt-16'>
			<Hero />
			<Projects />
			{/* <About />
			<Contact /> */}
		</main>
	);
}

export default Home
