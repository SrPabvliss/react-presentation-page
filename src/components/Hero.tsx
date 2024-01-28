import { CiLocationOn } from "react-icons/ci";


export const Hero = () => {
	return (
		<>
			<section className="relative bg-cover bg-[url('/img/hero.jpg')] h-[30rem] mb-8">
				<div className="absolute bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center">
					<h2 className="text-white text-3xl font-bold">
						Estudiante de ingeniería en Software
					</h2>
					<div className="flex items-end py-8">
						<CiLocationOn className="text-yellow-300 h-24 w-32" />

						<p className="font-light text-white">Ambato, Ecuador</p>
					</div>
					<a
						href="#contacto"
						className="bg-teal-600 text-white text-xl py-2 px-10 rounded hover:bg-teal-700 transition-colors duration-300 ease-in-out"
					>
						Contactar
					</a>
				</div>
			</section>
		</>
	);
};

export default Hero;
