import Head from 'next/head';
import Image from 'next/image';
import HomePage from '../components/HomePage';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
	return (
		<div>
			<HomePage />
			<Projects />
			<Experience />
			<About />
			<Contact />
		</div>
	);
}
