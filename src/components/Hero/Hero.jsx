import React from 'react'

const Hero = () => {
  return (
		<section
			id='hero'
			className='min-h-screen flex flex-col justify-center bg-testpurple items-center text-center px-4'
		>
			<h1 className='text-4xl md:text-6xl font-extrabold'>
				Oleksandr Patarykin
			</h1>
			<p className='mt-4 text-xl text-gray-600'>
				Frontend Developer & React Enthusiast
			</p>
			<a
				href='#projects'
				className='mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition'
			>
				Проєкти
			</a>
		</section>
	);
}

export default Hero
