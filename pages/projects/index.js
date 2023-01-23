import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import netflix from '../../public/assets/netflix-clone.png';
import videogames from '../../public/assets/pi-videogames-main-nine.vercel.app.png';
import momentum from '../../public/assets/momemtum-app.png';
import weather from '../../public/assets/weather-app.png';
import youtube from '../../public/assets/clone-youtube.png';
import todo from '../../public/assets/todo-app.png';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticProps = async () => {
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
			image: netflix,
			title: 'Netflix Clone',
			url: 'Netflix Clone',
			github: 'https://github.com/jpmacana/netflix-clone-react-firebase',
			demo: 'https://netflix-clone-react-macana.web.app/',
		},

		{
			id: 3,
			image: weather,
			title: 'Weather App',
			url: 'Weather App',
			github: 'https://github.com/jpmacana/weather-app-react-macana',
			demo: 'https://weather-app-macana.netlify.app',
		},
		{
			id: 4,
			image: momentum,
			title: 'Momemtun App',
			url: 'Momemtun App',
			github: 'https://github.com/jpmacana/momentum-clone',
			demo: 'https://momentum-clone-macana.vercel.app/',
		},
		{
			id: 5,
			image: youtube,
			title: 'MacanaTube',
			url: 'MacanaTube',
			github: 'https://github.com/jpmacana/travel-world-app',
			demo: 'https://travel-world-app-jpmacana.vercel.app/',
		},
		{
			id: 6,
			image: todo,
			title: 'To Do App',
			url: 'To Do App',
			github: 'https://github.com/jpmacana/to-do-react',
			demo: 'https://todo-macana-react.netlify.app/',
		},
	];

	return {
		props: { data },
	};
};

const ProyectRoute = ({ data }) => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-screen-xl p-4 pt-24 mx-auto text-center md:text-left">
				<h5 className="text-xs font-bold tracking-tight text-gray-600 uppercase md:text-sm">
					My Recent Work
				</h5>
				<h2 className="text-5xl font-bold tracking-tight text-blue-500 uppercase md:text-7xl">
					Projects
				</h2>

				<div className="grid max-w-5xl gap-8 pt-8 mx-auto md:grid-cols-2">
					{data.map(({ id, title, image, github, demo, url }) => (
						<Link key={id} href={`/projects/${url}`}>
							<div className="overflow-hidden rounded-md shadow-md cursor-pointer group shadow-gray-600">
								<Image
									src={image}
									alt={title}
									className="duration-200 rounded-md hover:scale-110"
								/>
								<h2 className="my-4 text-base font-extrabold text-center text-red-600 capitalize duration-200 group-hover:underline underline-offset-4">
									{title}
								</h2>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProyectRoute;
