import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { BiChevronLeft } from 'react-icons/bi';
import { RiRadiosButtonFill } from 'react-icons/ri';

import netflix from '../../public/assets/netflix-clone.png';
import twich from '../../public/assets/twich-clone.png';
import videogames from '../../public/assets/pi-videogames-main-nine.vercel.app.png';
import momentum from '../../public/assets/momemtum-app.png';
import weather from '../../public/assets/weather-app.png';
import youtube from '../../public/assets/clone-youtube.png';
import todo from '../../public/assets/todo-app.png';

const portfolios = [
	{
		id: 0,
		image: twich,
		title: 'Twich Clone',
		url: 'Twich Clone',
		github: 'https://github.com/jpmacana/twich-nextjs-macana',
		demo: 'https://twich-nextjs-macana.vercel.app/',
		text: 'Twitch in Next.JS styled with Tailwind CSS and as a bonus we will even add NextAuth.js for authentication using Github & Google! Routing and the Image component as we take advantage of lazy loading images! We will be creating everything from scratch and even using some mock data from https://mockaroo.com and utilizing Headless UI!',
	},
	{
		id: 1,
		image: videogames,
		title: 'PI - Videogames',
		url: 'PI - Videogames',
		github: 'https://github.com/jpmacana/PI-Videogames-main',
		demo: 'http://pi-videogames-main-nine.vercel.app/',
		text: 'This is my Final Project on Henry-s Bootcamp, this is my final personal project after the pass 4 modules. The tecnologys that i used to made the app were React,Redux,Sequelize-Postgress and Express',
	},

	{
		id: 2,
		image: netflix,
		title: 'Netflix Clone',
		url: 'Netflix Clone',
		github: 'https://github.com/jpmacana/netflix-clone-react-firebase',
		demo: 'https://netflix-clone-react-macana.web.app/',
		text: 'This app is a clone of Netflix, I use React Js with Tailwind Css from the style,the API TMDB , and Firabase for the database.',
	},

	{
		id: 3,
		image: weather,
		title: 'Weather App',
		url: 'Weather App',
		github: 'https://github.com/jpmacana/weather-app-react-macana',
		demo: 'https://weather-app-macana.netlify.app',
		text: 'This app is a React JS weather app using the OpenWeatherMap API. We will be using axios to connect with our API.',
	},
	{
		id: 4,
		image: momentum,
		title: 'Momemtun App',
		url: 'Momemtun App',
		github: 'https://github.com/jpmacana/momentum-clone',
		demo: 'https://momentum-clone-macana.vercel.app/',
		text: 'This app is a Google Momentum Clone using Axios to talk to our different APIs.  Axios is a promised-based HTTP Client for node which makes talking with APIs clean and simple. We use React Hooks such as useState and useEffect to work with Axios',
	},
	{
		id: 5,
		image: youtube,
		title: 'MacanaTube',
		url: 'MacanaTube',
		github: 'https://github.com/jpmacana/travel-world-app',
		demo: 'https://travel-world-app-jpmacana.vercel.app/',
		text: 'This app is a clone of Youtube,I use React Js with Tailwind Css from the style.',
	},
	{
		id: 6,
		image: todo,
		title: 'To Do App',
		url: 'To Do App',
		github: 'https://github.com/jpmacana/to-do-react',
		demo: 'https://todo-macana-react.netlify.app/',
		text: 'I build this simple task app in React JS. We will include the useState hook to manage state.React-Icons used as a dependency. We will take the input from our text field store it in our state then map through all of our tasks. We assign a unique ID to each task in order to easily toggle whether or not our task is completed and also delete the task. Very minimal CSS here so its not stunning to look at, rather I focused more on the basic fundamentals of working with state in React JS',
	},
];

const getProtfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
	const paths = portfolios.map((p) => ({ params: { id: p.url } }));

	return {
		paths,
		fallback: false,
	};
}

// eslint-disable-next-line @next/next/no-typos
export async function getStaticProps({ params }) {
	const portfolio = getProtfolioFrom(params.id);

	return {
		props: { portfolio },
	};
}

const OneProject = ({ portfolio: { title, image, github, demo, text } }) => {
	return (
		<div className="w-full text-center h-fit">
			<div className="flex flex-col w-full h-full max-w-screen-xl p-8 pt-24 mx-auto">
				<div className="flex">
					<Link href="/projects">
						<div className="flex items-center justify-center my-8 font-bold capitalize rounded-lg cursor-pointer text-sky-500 ">
							<BiChevronLeft size={25} /> Back
						</div>
					</Link>
				</div>

				<h1 className="mt-2 mb-8 text-4xl font-bold tracking-wider text-left text-red-400 capitalize md:text-left">
					{title}
				</h1>

				<div className="relative h-56 mx-auto my-8 overflow-hidden w-96">
					<Image src={image} alt="netflix" layout="fill" objectFit="cover" />
				</div>

				<h2 className="mt-2 mb-8 text-2xl font-bold tracking-wider text-left text-emerald-800 capitalized">
					Description
				</h2>

				<div className="ease-in shadow-xl x-auto shadow-emerald-300 rounded-2xl">
					<p className="mt-4 text-lg text-justify capitalize ml-14 x-auto ">
						{text}
					</p>
				</div>

				<div className="flex items-center justify-center gap-10">
					<Link href={demo} target="_blank">
						<div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md group">
							DEMO
							<span className="duration-200 ease-in">
								<AiOutlineCaretRight size={18} className="ml-2 " />
							</span>
						</div>
					</Link>

					<Link href={github}>
						<div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md group">
							GITHUB
							<span className="duration-200 ease-in">
								<FaGithub size={18} className="ml-2 " />
							</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default OneProject;
