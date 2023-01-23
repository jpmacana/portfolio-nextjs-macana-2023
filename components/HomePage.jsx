import React from 'react';
import heroImage from '../public/assets/aboutme.jpg';
import { MdExpandMore } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div id="home" className="w-full h-full text-center ">
			<div className="flex flex-col items-center justify-around w-full h-full max-w-screen-xl p-4 pt-24 mx-auto">
				<div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
					<Image src={heroImage} alt="me" />
				</div>
				<h1 className="mt-2 text-6xl font-bold uppercase text-emerald-700">
					Fullstack Developer
				</h1>

				<h4 className="mx-auto mt-6 text-lg font-bold text-gray-400 ">
					Hello! My name is...
				</h4>
				<h2 className="max-w-sm p-2 mx-auto mt-2 text-xl font-bold text-gray-700 capitalize">
					Juan Pablo Senatra
				</h2>

				<Link href="/#about">
					<div className="flex items-center justify-center px-6 py-3 my-8 font-bold tracking-wider text-white uppercase bg-blue-500 rounded-md cursor-pointer group">
						Know more
						<span className="duration-100 ease-in -rotate-90 group-hover:rotate-0">
							<MdExpandMore size={25} />
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
