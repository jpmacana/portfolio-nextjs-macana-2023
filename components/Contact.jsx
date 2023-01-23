import Image from 'next/image';
import React from 'react';
import contact from '../public/contact-us.jpg';
import {
	FaLinkedin,
	FaGithub,
	FaInstagram,
	FaTwitter,
	FaFacebook,
} from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
	return (
		<div id="contact" className="w-full">
			<div className="max-w-screen-xl px-8 py-16 mx-auto text-center md:text-left">
				<h5 className="text-xs font-bold tracking-tight text-gray-600 uppercase md:text-sm">
					Get in Touch
				</h5>
				<h2 className="text-5xl font-bold tracking-tight text-indigo-600 uppercase md:text-7xl">
					Contact
				</h2>

				<div className="flex flex-col gap-8 mt-4 bg-white shadow-xl md:flex-row shadow-indigo-300">
					<div className="w-full h-full p-4 md:w-1/2 rounded-xl">
						<Image src={contact} alt="foto" className="ease-in rounded-xl " />
						<p className="pt-4 pb-8 font-bold text-justify text-indigo-500 text-md">
							I am open to receive any type of message, either for work or to
							meet other developers. Feel free to use the medium you want.
						</p>

						<div className="grid w-4/5 grid-cols-2 gap-10 mx-auto ">
							<div className="flex items-center justify-center p-3 duration-200 rounded-full shadow-md cursor-pointer shadow-indigo-500 hover:scale-105">
								<Link
									href="https://www.linkedin.com/in/jpsenatra/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FaLinkedin size={35} />
								</Link>
							</div>

							<div className="flex items-center justify-center p-3 duration-200 rounded-full shadow-md cursor-pointer shadow-indigo-500 hover:scale-105">
								<Link
									href="https://www.instagram.com/jpmacana/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FaInstagram size={35} />
								</Link>
							</div>

							<div className="flex items-center justify-center p-3 duration-200 rounded-full shadow-md cursor-pointer shadow-indigo-500 hover:scale-105">
								<Link
									href="https://github.com/jpmacana"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FaGithub size={35} />
								</Link>
							</div>

							<div className="flex items-center justify-center p-3 duration-200 rounded-full shadow-md cursor-pointer shadow-indigo-500 hover:scale-105">
								<Link
									href="https://www.facebook.com/jpmacana"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FaFacebook size={35} />
								</Link>
							</div>
						</div>
					</div>

					{/* form */}

					<div className="w-full h-full p-4 md:w-1/2 rounded-xl">
						<div className="p-4 text-left">
							<form
								action="https://getform.io/f/3531454e-d030-4b2b-8d4c-b3cffc6801bc"
								method="POST"
							>
								<div className="grid w-full gap-4 py-0 md:grid-cols-2">
									<div className="flex flex-col">
										<label className="py-2 text-sm font-light capitalize text-slate-600">
											Name
										</label>
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Insert your name"
											className="p-3 border-2 border-indigo-400 rounded-lg focus:outline-none"
										/>
									</div>
									<div className="flex flex-col">
										<label className="py-2 text-sm font-light capitalize text-slate-600">
											Phone Number
										</label>
										<input
											type="number"
											name="phone"
											id="phone"
											placeholder="Insert your phone"
											className="p-3 border-2 border-indigo-400 rounded-lg focus:outline-none"
										/>
									</div>
									<div className="flex flex-col col-span-2">
										<label className="py-2 text-sm font-light capitalize text-slate-600">
											Email
										</label>
										<input
											type="email"
											name="email"
											id="email"
											placeholder="Insert your email"
											className="p-3 border-2 border-indigo-400 rounded-lg focus:outline-none"
										/>
									</div>
									<div className="flex flex-col col-span-2">
										<label className="py-2 text-sm font-light capitalize text-slate-600">
											Message
										</label>
										<textarea
											name="name"
											id="name"
											cols="30"
											rows="10"
											placeholder="Insert your message"
											className="p-3 border-2 border-indigo-400 rounded-lg focus:outline-none"
										/>
									</div>
								</div>

								<div className="flex items-center justify-center">
									<button className="px-6 py-3 my-8 font-bold tracking-wider text-white uppercase duration-300 bg-indigo-500 rounded-lg cursor-pointer group hover:scale-105">
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
