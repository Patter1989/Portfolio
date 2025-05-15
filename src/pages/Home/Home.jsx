import React from 'react'
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';

const Home = () => {
  return (
		<main className='pt-20 text-center bg-black'>
			<Hero />
			<Projects />
			{/* <About />
			<Contact /> */}
		</main>
	);
}

export default Home
