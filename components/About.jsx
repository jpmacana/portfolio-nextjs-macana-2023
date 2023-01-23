/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { MdExpandMore } from 'react-icons/md';

const About = () => {
	return (
		<div id="about" className="w-full">
			<div className="max-w-screen-xl px-8 py-16 mx-auto text-center md:text-left">
				<h2 className="text-5xl font-bold tracking-tight text-blue-800 uppercase md:text-7xl">
					About Me
				</h2>

				<div className="px-8 my-8 shadow-xl shadow-green-300">
					<h5 className="max-w-2xl py-4 pt-10 mx-auto text-xs font-bold tracking-tight text-gray-600 uppercase md:text-sm">
						Welcome 👋
					</h5>

					<p className="max-w-2xl py-4 mx-auto text-justify">
						I'm from Mendoza Argentina,my passions are
						tecnology,animals,football, listen music and watch movies and TV
						series.
					</p>

					<p p className="max-w-2xl py-4 mx-auto text-justify">
						Since I was a teenager I was very curious and skillful about the
						devices and everything related to the tecnology. Then it appeared
						the curiosity for the hardware and the software, the SO, finally the
						Programming and the Web Development.
					</p>

					<p p className="max-w-2xl py-4 mx-auto text-justify">
						I have 2 pets, they are Schnauzers Mini their names are Tyrion and
						Enzo, they are father and son.
					</p>

					<p p className="max-w-2xl py-4 mx-auto text-justify">
						I am a big fan of my futbol team River Plate 🤍❤️🤍, one of the
						names of my pets is because my childhood idol was Enzo Francescoli,
						and now one who is the best players in the present is Enzo Perez.
						And the another dog, his name was because my favorite character in
						Game of Thrones was Tyrion Lannister, his expressions reminded me of
						him. 😁
					</p>
				</div>

				<div className="flex items-center justify-center gap-10">
					<Link href="/cv.pdf" target="_blank" download="cv.pdf">
						<div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md group">
							RESUME
							<span className="duration-100 ease-in -rotate-90 group-hover:rotate-0">
								<MdExpandMore size={25} />
							</span>
						</div>
					</Link>

					<Link href="/#projects">
						<div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md group">
							MY PORTFOLIO{' '}
							<span className="duration-100 ease-in -rotate-90 group-hover:rotate-180">
								<MdExpandMore size={25} />
							</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
