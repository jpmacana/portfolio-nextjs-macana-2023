import React from 'react';

import js from '../public/assets/js.png';
import html from '../public/assets/html.png';
import css from '../public/assets/css3.png';
import boostrap from '../public/assets/boostrap.png';
import react from '../public/assets/react.png';
import redux from '../public/assets/redux.png';
import tailwind from '../public/assets/tailwind.png';
import nodejs from '../public/assets/nodejs.png';
import postgres from '../public/assets/Postgres.png';
import mysql from '../public/assets/mysql.png';
import seq from '../public/assets/seq.png';
import mongodb from '../public/assets/mongodb.png';
import firabase from '../public/assets/firabase.png';
import github from '../public/assets/github.png';
import moduleName from '../public/assets/nextjs.png';
import nextjs from '../public/assets/nextjs.png';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Image from 'next/image';

const Experience = () => {
	const experiences = [
		{
			id: 2,
			title: 'HTML',
			image: html,
		},
		{
			id: 3,
			title: 'CSS',
			image: css,
		},
		{
			id: 5,
			title: 'React',
			image: react,
		},
		{
			id: 6,
			title: 'Redux',
			image: redux,
		},
		{
			id: 7,
			title: 'Tailwind',
			image: tailwind,
		},
		{
			id: 8,
			title: 'NodeJs',
			image: nodejs,
		},
		{
			id: 9,
			title: 'Nextjs',
			image: nextjs,
		},
		{
			id: 10,
			title: 'Sequelize',
			image: seq,
		},
		{
			id: 11,
			title: 'MongoDB',
			image: mongodb,
		},

		{
			id: 12,
			title: 'FiraBase',
			image: firabase,
		},
		{
			id: 13,
			title: 'Github',
			image: github,
		},
		{
			id: 14,
			title: 'Postgres',
			image: postgres,
		},
	];

	return (
		<div id="experience" className="w-full">
			<div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
				<h5 className="text-xs md:text-sm tracking-tight uppercase text-gray-600 font-bold">
					The Skills I have
				</h5>
				<h2 className="text-5xl md:text-7xl tracking-tight uppercase text-blue-800 font-bold">
					Experience
				</h2>

				<div className="grid lg:grid-cols-4 gap-8 pt-10">
					{experiences.map(({ id, title, image }) => (
						<div
							key={id}
							className=" flex flex-col lg:flex gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-2xl hover:scale-110 ease-in duration-300 odd:shadow-red-400
							even:shadow-blue-400"
						>
							<h3 className="text-center text-xl text-rose-300">{title}</h3>
							<Image src={image} alt={title} height="64px" width="64px" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
