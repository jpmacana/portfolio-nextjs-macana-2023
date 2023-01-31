import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

import netflix from '../public/assets/netflix-clone.png';
import twich from '../public/assets/twich-clone.png';
import videogames from '../public/assets/pi-videogames-main-nine.vercel.app.png';
import momentum from '../public/assets/momemtum-app.png';
import weather from '../public/assets/weather-app.png';
import youtube from '../public/assets/clone-youtube.png';
import todo from '../public/assets/todo-app.png';

const Projects = () => {
	const data = [
		{
			id: 1,
			image: videogames,
			title: 'PI - Videogames',
			url: 'PI - Videogames',
			github: 'https://github.com/jpmacana/PI-Videogames-main',
			demo: 'http://pi-videogames-main-nine.vercel.app/',
		},

		{
			id: 2,
			image: twich,
			title: 'Twich Clone',
			url: 'Twich Clone',
			github: 'https://github.com/jpmacana/twich-nextjs-macana',
			demo: 'https://twich-nextjs-macana.vercel.app/',
		},
		{
			id: 3,
			image: netflix,
			title: 'Netflix Clone',
			url: 'Netflix Clone',
			github: 'https://github.com/jpmacana/netflix-clone-react-firebase',
			demo: 'https://netflix-clone-react-macana.web.app/',
		},

		{
			id: 4,
			image: weather,
			title: 'Weather App',
			url: 'Weather App',
			github: 'https://github.com/jpmacana/weather-app-react-macana',
			demo: 'https://weather-app-macana.netlify.app',
		},
		{
			id: 5,
			image: momentum,
			title: 'Momemtun App',
			url: 'Momemtun App',
			github: 'https://github.com/jpmacana/momentum-clone',
			demo: 'https://momentum-clone-macana.vercel.app/',
		},
		{
			id: 6,
			image: youtube,
			title: 'MacanaTube',
			url: 'MacanaTube',
			github: 'https://github.com/jpmacana/travel-world-app',
			demo: 'https://travel-world-app-jpmacana.vercel.app/',
		},
		{
			id: 7,
			image: todo,
			title: 'To Do App',
			url: 'To Do App',
			github: 'https://github.com/jpmacana/to-do-react',
			demo: 'https://todo-macana-react.netlify.app/',
		},
	];

	return (
		<div id="projects" className="w-full">
			<div className="max-w-screen-xl p-4 pt-24 mx-auto mt-16 text-center md:text-left">
				<h5 className="text-xs font-bold tracking-tight text-gray-600 uppercase md:text-sm">
					My Recent Work
				</h5>
				<h2 className="pb-16 text-5xl font-bold tracking-tight text-blue-500 uppercase md:text-7xl">
					Projects
				</h2>

				<div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
					{data.map(({ id, title, image, github, demo, url }) => (
						<Link key={id} href={`/projects/${url}`}>
							<div className="overflow-hidden rounded-md shadow-md cursor-pointer group shadow-gray-600">
								<h2 className="my-4 text-base font-extrabold text-center text-red-600 capitalize duration-200 group-hover:underline underline-offset-4">
									<Image
										src={image}
										alt={title}
										className="mb-6 duration-300 rounded-md hover:scale-105"
									/>
									{title}
								</h2>
							</div>
						</Link>
					))}
				</div>

				<div className="flex items-center justify-center">
					<Link href="/projects">
						<div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md cursor-pointer group">
							All Projects
							<span className="duration-100 ease-in -rotate-90 group-hover:translate-x-5">
								<MdExpandMore size={25} />
							</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Projects;
